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
			colors: {
				ink: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#1a1a1a",
					950: "#0d0d0d",
				},
				accent: {
					50: "#fef2f2",
					100: "#fde6e6",
					200: "#fbd0d0",
					300: "#f7a8a8",
					400: "#f07171",
					500: "#c41e1e",
					600: "#a31818",
					700: "#871717",
					800: "#711919",
					900: "#3d0808",
				},
				warm: {
					50: "#fdfbe8",
					100: "#fcf7c4",
					200: "#faed8c",
					300: "#f6db4a",
					400: "#f0c818",
					500: "#c18807",
					600: "#9a6209",
					700: "#7f4e10",
					800: "#6c3f13",
					900: "#3f2007",
				},
			},
			fontFamily: {
				heading: ["Oswald", "sans-serif"],
				body: ["Inter", "sans-serif"],
			},
			container: {
				center: true,
				padding: "1rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config
