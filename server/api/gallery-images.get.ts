import { readdirSync, statSync, existsSync } from "fs"
import { join, resolve } from "path"

const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp"])

export default defineEventHandler(() => {
	const dir = resolve("public/images/gallery")
	if (!existsSync(dir)) return []

	const files = readdirSync(dir).filter((f) => {
		if (f.startsWith(".")) return false
		const ext = f.slice(f.lastIndexOf(".")).toLowerCase()
		return imageExts.has(ext) && statSync(join(dir, f)).isFile()
	})

	// Restituisci array di oggetti { name, mtime } per permettere cache-busting client
	return files
		.map((f) => {
			const p = join(dir, f)
			const st = statSync(p)
			return { name: f, mtime: st.mtimeMs || st.mtime.getTime() }
		})
		.sort((a, b) => a.name.localeCompare(b.name))
})
