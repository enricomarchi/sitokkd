import { Client } from "basic-ftp"
import { config } from "dotenv"
import { resolve, posix } from "path"
import { statSync, readdirSync } from "fs"

config()

const FTP_HOST = process.env.FTP_HOST!
const FTP_USER = process.env.FTP_USER!
const FTP_PASS = process.env.FTP_PASS!
const FTP_DIR = process.env.FTP_DIR!

if (!FTP_HOST || !FTP_USER || !FTP_PASS || !FTP_DIR) {
	console.error("❌ Variabili FTP mancanti nel file .env")
	process.exit(1)
}

async function uploadDir(
	client: Client,
	localDir: string,
	remoteDir: string,
	exclude: string[] = [],
) {
	await client.ensureDir(remoteDir)
	for (const entry of readdirSync(localDir, { withFileTypes: true })) {
		if (exclude.includes(entry.name)) continue
		const localPath = resolve(localDir, entry.name)
		const remotePath = posix.join(remoteDir, entry.name)
		if (entry.isDirectory()) {
			await uploadDir(client, localPath, remotePath)
		} else {
			await client.uploadFrom(localPath, remotePath)
		}
	}
}

async function cleanRemoteDir(
	client: Client,
	remoteDir: string,
	exclude: string[] = [],
) {
	let items
	try {
		items = await client.list(remoteDir)
	} catch {
		return
	}
	for (const item of items) {
		if (exclude.includes(item.name)) continue
		const remotePath = posix.join(remoteDir, item.name)
		try {
			if (item.isDirectory) {
				await client.removeDir(remotePath)
			} else {
				await client.remove(remotePath)
			}
		} catch (err) {
			console.warn(`⚠️  Impossibile eliminare ${remotePath}, salto.`)
		}
	}
}

async function deploy() {
	const client = new Client()
	client.ftp.verbose = false

	const outputDir = resolve(process.cwd(), ".output/public")
	try {
		statSync(outputDir)
	} catch {
		console.error(
			"❌ Directory .output/public non trovata. Esegui prima: npm run build",
		)
		process.exit(1)
	}

	try {
		console.log(`📡 Connessione FTP a ${FTP_HOST}...`)
		await client.access({
			host: FTP_HOST,
			user: FTP_USER,
			password: FTP_PASS,
			secure: false,
		})
		console.log("✅ Connesso!")

		console.log(`🗑️  Pulizia ${FTP_DIR} (preservando images/)...`)
		await cleanRemoteDir(client, FTP_DIR, ["images"])

		console.log(
			`📤 Upload .output/public → ${FTP_DIR} (escludendo images/)...`,
		)
		await uploadDir(client, outputDir, FTP_DIR, ["images"])

		// Upload images/ ma preserva courses/, hero/ e gallery/ (foto caricate dall'utente sul server)
		const localImages = resolve(outputDir, "images")
		const remoteImages = posix.join(FTP_DIR, "images")
		console.log(
			"🗑️  Pulizia images/ (preservando courses/, hero/ e gallery/)...",
		)
		await cleanRemoteDir(client, remoteImages, [
			"courses",
			"hero",
			"gallery",
		])
		console.log(
			"📤 Upload images/ (escludendo courses/, hero/ e gallery/)...",
		)
		await uploadDir(client, localImages, remoteImages, [
			"courses",
			"hero",
			"gallery",
		])

		console.log("🎉 Deploy completato con successo!")
	} catch (err) {
		console.error("❌ Errore durante il deploy:", err)
		process.exit(1)
	} finally {
		client.close()
	}
}

deploy()
