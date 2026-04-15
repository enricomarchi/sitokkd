export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],

	vite: {
		assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG"],
	},

	app: {
		baseURL: "/",
		head: {
			title: "KI KAI DOJO",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "description",
					content:
						"Scopri il KI KAI DOJO a Carbonera. Corsi di karate per tutti i livelli, dalla cintura bianca alla nera. Tradizione, disciplina e crescita personale.",
				},
				{ property: "og:type", content: "website" },
				{
					property: "og:title",
					content: "KI KAI DOJO | Karate Carbonera",
				},
				{
					property: "og:description",
					content:
						"Scopri il KI KAI DOJO a Carbonera. Corsi di karate per tutti i livelli, dalla cintura bianca alla nera.",
				},
				{ property: "og:locale", content: "it_IT" },
				{ name: "twitter:card", content: "summary_large_image" },
			],
			link: [
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon.svg",
				},
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@400;500;600;700&display=swap",
				},
			],
			htmlAttrs: {
				lang: "it",
			},
		},
	},

	devtools: { enabled: false },
	ssr: true,

	nitro: {
		preset: "static",
	},

	compatibilityDate: "2024-11-12",
})
