import { readdirSync, statSync, existsSync } from "fs"
import { join, resolve } from "path"

const imageExts = new Set([".jpg", ".jpeg", ".png", ".svg", ".webp"])

export default defineEventHandler(() => {
	const dir = resolve("public/images/hero")
	if (!existsSync(dir)) return []

	return readdirSync(dir)
		.filter((f) => {
			if (f.startsWith(".")) return false
			const ext = f.slice(f.lastIndexOf(".")).toLowerCase()
			return imageExts.has(ext) && statSync(join(dir, f)).isFile()
		})
		.sort()
})
