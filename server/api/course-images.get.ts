import { readdirSync, statSync, existsSync } from "fs"
import { join, resolve } from "path"

export default defineEventHandler(() => {
	const baseDir = resolve("public/images/courses")
	const result: Record<string, string[]> = {}

	if (!existsSync(baseDir)) return result

	for (const sede of readdirSync(baseDir, { withFileTypes: true })) {
		if (!sede.isDirectory() || sede.name.startsWith(".")) continue
		const sedeDir = join(baseDir, sede.name)
		for (const course of readdirSync(sedeDir, { withFileTypes: true })) {
			if (!course.isDirectory() || course.name.startsWith(".")) continue
			const courseDir = join(sedeDir, course.name)
			const slug = `${sede.name}/${course.name}`
			const files = readdirSync(courseDir)
				.filter(
					(f) =>
						!f.startsWith(".") &&
						statSync(join(courseDir, f)).isFile(),
				)
				.sort()
			result[slug] = files
		}
	}

	return result
})
