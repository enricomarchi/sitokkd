export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],

	css: ["~/assets/fonts/fonts.css"],

	vite: {
		assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG"],
	},

	app: {
		baseURL: "/",
		head: {
			title: "Ki Kai Dojo – Scuola di Karate a Carbonera (Treviso)",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "description",
					content:
						"Ki Kai Dojo ASD – Scuola di Karate Shotokan a Carbonera (Treviso). Corsi per bambini, ragazzi e adulti. Difesa personale, agonismo e cinture colorate. Prima lezione gratuita.",
				},
				{
					name: "keywords",
					content:
						"karate Carbonera, karate Treviso, corsi karate bambini Treviso, difesa personale Treviso, arti marziali Carbonera, Ki Kai Dojo, karate Shotokan, scuola karate Veneto",
				},
				{ property: "og:type", content: "website" },
				{
					property: "og:title",
					content:
						"Ki Kai Dojo – Scuola di Karate a Carbonera (Treviso)",
				},
				{
					property: "og:description",
					content:
						"Corsi di Karate Shotokan per bambini, ragazzi e adulti a Carbonera (TV). Difesa personale, agonismo. Prima lezione gratuita!",
				},
				{
					property: "og:url",
					content: "https://www.karatecarbonera.com/",
				},
				{
					property: "og:image",
					content:
						"https://www.karatecarbonera.com/images/logo/logo.svg",
				},
				{
					property: "og:site_name",
					content: "Ki Kai Dojo – Karate Carbonera",
				},
				{ property: "og:locale", content: "it_IT" },
				{ name: "twitter:card", content: "summary_large_image" },
				{
					name: "twitter:title",
					content:
						"Ki Kai Dojo – Scuola di Karate a Carbonera (Treviso)",
				},
				{
					name: "twitter:description",
					content:
						"Corsi di Karate Shotokan per bambini, ragazzi e adulti a Carbonera (TV). Difesa personale, agonismo. Prima lezione gratuita!",
				},
				{
					name: "geo.region",
					content: "IT-TV",
				},
				{
					name: "geo.placename",
					content: "Carbonera",
				},
				{
					name: "geo.position",
					content: "45.6669;12.2789",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicon.svg",
				},
				{
					rel: "canonical",
					href: "https://www.karatecarbonera.com/",
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
