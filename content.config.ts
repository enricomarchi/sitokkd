import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
			schema: z.object({
				title: z.string(),
				seoTitle: z.string().optional(),
				description: z.string(),
				date: z.string(),
				slug: z.string().optional(),
				image: z.string().optional(),
				imageAlt: z.string().optional(),
				tags: z.array(z.string()).optional(),
				published: z.boolean().optional(),
			}),
		}),
	},
})
