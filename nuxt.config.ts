export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],

	app: {
		head: {
			title: "KI KAI DOJO",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content:
						"Scopri il KI KAI DOJO a Carbonera. Corsi di karate per tutti i livelli, dalla cintura bianca alla nera. Tradizione, disciplina e crescita personale.",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "anonymous",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&family=ABeeZee:wght@400;700&display=swap",
				},
			],
		},
	},

	devtools: { enabled: false },
	ssr: true,

	nitro: {
		preset: "static",
	},

	compatibilityDate: "2024-11-12",
})
