import type { Config } from "tailwindcss"

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./content/**/*.md",
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
	plugins: [
		require("@tailwindcss/typography"),
		function ({ addComponents, theme }: any) {
			addComponents({
				".prose-blog": {
					color: theme("colors.ink.700"),
					lineHeight: "1.85",
					fontSize: "1.0625rem",
					"h2, h3, h4": {
						fontFamily: `${theme("fontFamily.heading")}, sans-serif`,
						fontWeight: "700",
						color: theme("colors.ink.900"),
						letterSpacing: "0.02em",
					},
					h2: {
						fontSize: "1.5rem",
						marginTop: "2.5rem",
						marginBottom: "1rem",
					},
					h3: {
						fontSize: "1.2rem",
						marginTop: "2rem",
						marginBottom: "0.75rem",
					},
					p: {
						marginBottom: "1.25rem",
					},
					"ul, ol": {
						paddingLeft: "1.5rem",
						marginBottom: "1.25rem",
					},
					li: {
						marginBottom: "0.4rem",
					},
					a: {
						color: theme("colors.accent.500"),
						textDecoration: "underline",
						"&:hover": { color: theme("colors.accent.600") },
					},
					blockquote: {
						borderLeft: `3px solid ${theme("colors.accent.500")}`,
						paddingLeft: "1.25rem",
						color: theme("colors.ink.400"),
						fontStyle: "italic",
						margin: "1.5rem 0",
					},
					"strong, b": {
						color: theme("colors.ink.900"),
						fontWeight: "600",
					},
					img: {
						borderRadius: "0",
						marginTop: "2rem",
						marginBottom: "2rem",
						width: "100%",
					},
					hr: {
						borderColor: theme("colors.ink.100"),
						margin: "2.5rem 0",
					},
				},
			})
		},
	],
} satisfies Config
