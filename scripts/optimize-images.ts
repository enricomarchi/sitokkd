import sharp from "sharp"
import { resolve, extname, relative } from "path"
import { readdirSync, statSync, readFileSync, writeFileSync } from "fs"

// Regole di ottimizzazione per cartella
// maxWidth: larghezza massima in pixel (il lato lungo viene ridotto proporzionalmente)
// quality: qualità JPEG (1-100)
// minKB: soglia minima per processare (sotto questa dimensione si salta)
const RULES: Record<
	string,
	{ maxWidth: number; quality: number; minKB: number }
> = {
	gallery: { maxWidth: 1600, quality: 80, minKB: 200 },
	dojo: { maxWidth: 1200, quality: 80, minKB: 150 },
	hero: { maxWidth: 1920, quality: 80, minKB: 200 },
	referees: { maxWidth: 600, quality: 80, minKB: 100 },
	"ragazzi-agonisti": { maxWidth: 800, quality: 80, minKB: 150 },
	"bambini-colorate": { maxWidth: 800, quality: 80, minKB: 150 },
	"bambini-principianti": { maxWidth: 800, quality: 80, minKB: 100 },
	"difesa-personale": { maxWidth: 800, quality: 80, minKB: 150 },
	"adulti-principianti": { maxWidth: 800, quality: 80, minKB: 150 },
	"adulti-nere": { maxWidth: 800, quality: 80, minKB: 150 },
	tigrotti: { maxWidth: 800, quality: 80, minKB: 150 },
}

// Cartella default per cartelle non elencate
const DEFAULT_RULE = { maxWidth: 1200, quality: 80, minKB: 200 }

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"])
const imagesDir = resolve(process.cwd(), "public/images")

interface Result {
	file: string
	beforeKB: number
	afterKB: number
	savedKB: number
	resized: boolean
	rotated?: boolean
}

function getAllImages(dir: string): string[] {
	const files: string[] = []
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const fullPath = resolve(dir, entry.name)
		if (entry.isDirectory()) {
			files.push(...getAllImages(fullPath))
		} else if (SUPPORTED_EXTS.has(extname(entry.name).toLowerCase())) {
			files.push(fullPath)
		}
	}
	return files
}

function getFolderName(filePath: string): string {
	const rel = relative(imagesDir, filePath)
	const parts = rel.split(/[\\/]/)
	// Per le sottocartelle dei corsi (es. courses/carbonera/bambini-colorate)
	// usa l'ultimo nome di cartella
	return parts.length > 1 ? parts[parts.length - 2] : "root"
}

async function optimizeImage(filePath: string): Promise<Result | null> {
	const folderName = getFolderName(filePath)
	const rule = RULES[folderName] || DEFAULT_RULE
	const stat = statSync(filePath)
	const beforeKB = Math.round(stat.size / 1024)

	const ext = extname(filePath).toLowerCase()

	// Legge il file come buffer per evitare problemi con spazi/parentesi nei nomi file su Windows
	const inputBuffer = readFileSync(filePath)
	const image = sharp(inputBuffer)
	const metadata = await image.metadata()

	if (!metadata.width || !metadata.height) return null

	// Se l'immagine ha un tag EXIF Orientation diverso da 1, segnala la necessità di rotazione
	const needRotate = !!metadata.orientation && metadata.orientation !== 1

	// Supporta flag --force per forzare l'elaborazione di tutte le immagini
	const force = process.argv.includes("--force")

	// Se sotto soglia e non necessita rotazione e non è forzato, salta
	if (beforeKB < rule.minKB && !needRotate && !force) return null

	const longestSide = Math.max(metadata.width, metadata.height)
	const needsResize = longestSide > rule.maxWidth

	// Applica automaticamente l'orientamento EXIF prima di ridimensionare/comprimere
	let pipeline = sharp(inputBuffer).rotate()

	if (needsResize) {
		pipeline = pipeline.resize({
			width:
				metadata.width >= metadata.height ? rule.maxWidth : undefined,
			height:
				metadata.height > metadata.width ? rule.maxWidth : undefined,
			withoutEnlargement: true,
		})
	}

	// Applica compressione in base al formato
	if (ext === ".jpg" || ext === ".jpeg") {
		pipeline = pipeline.jpeg({ quality: rule.quality, mozjpeg: true })
	} else if (ext === ".png") {
		pipeline = pipeline.png({ quality: rule.quality, compressionLevel: 9 })
	} else if (ext === ".webp") {
		pipeline = pipeline.webp({ quality: rule.quality })
	}

	const buffer = await pipeline.toBuffer()
	const afterKB = Math.round(buffer.length / 1024)

	// Salva se più piccolo, oppure se l'immagine è stata ruotata (serve correggere l'orientamento anche se la dimensione non cambia)
	if (afterKB < beforeKB || needRotate) {
		writeFileSync(filePath, buffer)
		return {
			file: relative(imagesDir, filePath),
			beforeKB,
			afterKB,
			savedKB: beforeKB - afterKB,
			resized: needsResize,
			rotated: needRotate,
		}
	}

	return null
}

async function main() {
	console.log("🔍 Scansione immagini in public/images...\n")
	const allImages = getAllImages(imagesDir)
	console.log(`📁 Trovate ${allImages.length} immagini\n`)

	const results: Result[] = []
	let skipped = 0
	let errors = 0

	for (let i = 0; i < allImages.length; i++) {
		const filePath = allImages[i]
		const rel = relative(imagesDir, filePath)
		process.stdout.write(
			`\r⏳ [${i + 1}/${allImages.length}] ${rel.substring(0, 60).padEnd(60)}`,
		)

		try {
			const result = await optimizeImage(filePath)
			if (result) {
				results.push(result)
			} else {
				skipped++
			}
		} catch (err) {
			errors++
			console.error(`\n❌ Errore: ${rel} — ${err}`)
		}
	}

	console.log("\n")

	// Riepilogo per cartella
	const byFolder = new Map<
		string,
		{ count: number; savedKB: number; resized: number }
	>()
	for (const r of results) {
		const folder =
			r.file.split(/[\\/]/)[0] || r.file.split(/[\\/]/)[1] || "root"
		// Usa la prima cartella del path
		const parts = r.file.split(/[\\/]/)
		const key = parts.length > 1 ? parts.slice(0, -1).join("/") : "root"
		const existing = byFolder.get(key) || {
			count: 0,
			savedKB: 0,
			resized: 0,
		}
		existing.count++
		existing.savedKB += r.savedKB
		existing.resized += r.resized ? 1 : 0
		byFolder.set(key, existing)
	}

	const totalSavedKB = results.reduce((sum, r) => sum + r.savedKB, 0)
	const totalSavedMB = (totalSavedKB / 1024).toFixed(1)

	console.log("📊 RIEPILOGO PER CARTELLA:")
	console.log("─".repeat(70))
	for (const [folder, data] of [...byFolder.entries()].sort(
		(a, b) => b[1].savedKB - a[1].savedKB,
	)) {
		const savedMB = (data.savedKB / 1024).toFixed(1)
		console.log(
			`  ${folder.padEnd(40)} ${data.count} file, -${savedMB} MB (${data.resized} ridimensionate)`,
		)
	}
	console.log("─".repeat(70))
	console.log(`\n✅ Ottimizzate: ${results.length} immagini`)
	console.log(`⏭️  Saltate: ${skipped} (sotto soglia)`)
	console.log(`❌ Errori: ${errors}`)
	console.log(`💾 Spazio risparmiato: ${totalSavedMB} MB`)

	// Top 10 risparmio
	if (results.length > 0) {
		console.log("\n🏆 TOP 10 risparmio:")
		const top = results.sort((a, b) => b.savedKB - a.savedKB).slice(0, 10)
		for (const r of top) {
			console.log(
				`  ${r.file.padEnd(50)} ${r.beforeKB} KB → ${r.afterKB} KB (-${r.savedKB} KB)`,
			)
		}
	}
}

main().catch(console.error)
