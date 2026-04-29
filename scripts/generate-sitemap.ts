/**
 * Genera sitemap.xml leggendo i file Markdown in content/blog/
 * e aggiungendoli alle URL statiche. Viene eseguito prima del deploy.
 */
import { readdirSync, readFileSync, writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://www.karatecarbonera.com"
const BLOG_DIR = resolve(process.cwd(), "content/blog")
const SITEMAP_PATH = resolve(process.cwd(), "public/sitemap.xml")
const TODAY = new Date().toISOString().split("T")[0]

interface BlogMeta {
	date?: string
	published?: boolean
	slug?: string
}

function parseFrontmatter(content: string): BlogMeta {
	const match = content.match(/^---\n([\s\S]*?)\n---/)
	if (!match) return {}
	const meta: BlogMeta = {}
	for (const line of match[1].split("\n")) {
		const [key, ...rest] = line.split(": ")
		const value = rest.join(": ").trim()
		if (key === "date") meta.date = value
		if (key === "published") meta.published = value !== "false"
		if (key === "slug") meta.slug = value
	}
	return meta
}

function slugFromFilename(filename: string): string {
	// es: "2026-04-20-trofeo-primavera.md" → "trofeo-primavera"
	return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "")
}

const staticUrls = [
	{
		loc: `${BASE_URL}/`,
		lastmod: TODAY,
		changefreq: "weekly",
		priority: "1.0",
	},
	{
		loc: `${BASE_URL}/blog`,
		lastmod: TODAY,
		changefreq: "weekly",
		priority: "0.8",
	},
	{
		loc: `${BASE_URL}/cookie-policy`,
		lastmod: "2026-04-20",
		changefreq: "yearly",
		priority: "0.3",
	},
	{
		loc: `${BASE_URL}/privacy-policy`,
		lastmod: "2026-04-20",
		changefreq: "yearly",
		priority: "0.3",
	},
]

let blogFiles: string[] = []
try {
	blogFiles = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))
} catch {
	console.warn(
		"⚠️  Cartella content/blog/ non trovata, la sitemap non includerà articoli.",
	)
}

const blogUrls = blogFiles
	.map((filename) => {
		const content = readFileSync(resolve(BLOG_DIR, filename), "utf-8")
		const meta = parseFrontmatter(content)
		if (meta.published === false) return null
		const slug = meta.slug ?? slugFromFilename(filename)
		return {
			loc: `${BASE_URL}/blog/${slug}`,
			lastmod: meta.date ?? TODAY,
			changefreq: "monthly",
			priority: "0.7",
		}
	})
	.filter(Boolean) as {
	loc: string
	lastmod: string
	changefreq: string
	priority: string
}[]

// Ordina blog per data decrescente
blogUrls.sort((a, b) => b.lastmod.localeCompare(a.lastmod))

const allUrls = [...staticUrls, ...blogUrls]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>
`

writeFileSync(SITEMAP_PATH, xml, "utf-8")
console.log(
	`✅ sitemap.xml aggiornata con ${allUrls.length} URL (${blogUrls.length} articoli blog)`,
)
