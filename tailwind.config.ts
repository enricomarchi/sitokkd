import type { Config } from "tailwindcss"

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
			},
			fontFamily: {
				sans: ["ABeeZee", "sans-serif"],
				heading: ["Merienda", "cursive"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
} satisfies Config
