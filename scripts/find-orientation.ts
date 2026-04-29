import sharp from "sharp"
import { readdirSync } from "fs"
import { resolve, extname } from "path"

const imagesDir = resolve(process.cwd(), "public/images")
const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"])

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

async function main() {
	const all = getAllImages(imagesDir)
	console.log(`Scansionando ${all.length} immagini in ${imagesDir}`)
	const bad: string[] = []
	for (const f of all) {
		try {
			const m = await sharp(f).metadata()
			if (m.orientation && m.orientation !== 1) {
				bad.push(
					`${f} -> orientation=${m.orientation} (${m.width}x${m.height})`,
				)
			}
		} catch (err) {
			console.error(`Errore su ${f}:`, err)
		}
	}
	console.log(`Trovate ${bad.length} immagini con orientation != 1`)
	if (bad.length > 0) console.log(bad.join("\n"))
}

main().catch(console.error)
