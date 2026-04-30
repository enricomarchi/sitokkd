<template>
	<div v-if="article" class="min-h-screen bg-white">
		<!-- Hero articolo -->
		<div class="relative bg-ink-950 pt-32 pb-20 overflow-hidden">
			<!-- Immagine di sfondo con overlay -->
			<div v-if="article.image" class="absolute inset-0">
				<img
					:src="article.image"
					:alt="article.title"
					class="w-full h-full object-contain"
				/>
				<!-- overlay uniforme per oscuramento senza gradient (più scuro) -->
				<div class="absolute inset-0 bg-ink-950/90" />
			</div>

			<div class="relative container mx-auto px-6 max-w-3xl text-center">
				<NuxtLink
					to="/blog"
					class="inline-flex items-center gap-2 text-accent-400 text-sm mb-10 hover:text-accent-300 transition-colors"
				>
					<svg
						class="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Tutti gli articoli
				</NuxtLink>

				<h1
					class="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
				>
					{{ article.title }}
				</h1>
				<div class="w-12 h-px bg-accent-500 mx-auto mb-6" />
				<p
					v-if="article.description"
					class="text-white/50 leading-relaxed max-w-xl mx-auto"
				>
					{{ article.description }}
				</p>
				<time
					v-if="article.date"
					:datetime="article.date"
					class="block text-white/30 text-sm mt-6"
				>
					{{ formatDate(article.date) }}
				</time>
			</div>
		</div>

		<!-- Corpo articolo -->
		<div class="container mx-auto px-6 py-16 max-w-3xl">
			<article class="prose prose-blog">
				<ContentRenderer :value="article" />
			</article>

			<!-- Condivisione / navigazione -->
			<div
				class="mt-16 pt-8 border-t border-ink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
			>
				<NuxtLink
					to="/blog"
					class="inline-flex items-center gap-2 text-ink-500 text-sm hover:text-ink-900 transition-colors"
				>
					<svg
						class="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Tutti gli articoli
				</NuxtLink>
				<NuxtLink
					to="/#contact"
					class="inline-flex items-center gap-2 text-accent-500 text-sm hover:text-accent-600 transition-colors font-medium"
				>
					Vuoi saperne di più? Contattaci
					<svg
						class="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</NuxtLink>
			</div>
		</div>
	</div>

	<div
		v-else
		class="min-h-screen bg-ink-950 flex items-center justify-center text-white"
	>
		<div class="text-center">
			<p class="text-ink-400 mb-6">Articolo non trovato.</p>
			<NuxtLink
				to="/blog"
				class="text-accent-400 hover:text-accent-300 text-sm"
			>
				← Torna al blog
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug)
	? route.params.slug.join("/")
	: route.params.slug

const { data: article } = await useAsyncData(`blog-${slug}`, async () => {
	const bySlug = await queryCollection("blog")
		.where("slug", "=", slug)
		.first()
	if (bySlug) return bySlug
	// fallback: try matching path or stem
	const byPath = await queryCollection("blog")
		.where("path", "LIKE", `%${slug}%`)
		.first()
	if (byPath) return byPath
	const byStem = await queryCollection("blog")
		.where("stem", "=", slug)
		.first()
	return byStem
})

if (!article.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Articolo non trovato",
	})
}

function formatDate(dateStr: string): string {
	if (!dateStr) return ""
	const d = new Date(dateStr)
	return d.toLocaleDateString("it-IT", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})
}

// SEO dinamico per ogni articolo
const seoTitle =
	article.value?.seoTitle ?? `${article.value?.title} – Ki Kai Dojo`
useHead({
	title: seoTitle,
	meta: [
		{ name: "description", content: article.value?.description ?? "" },
		{ property: "og:title", content: seoTitle },
		{
			property: "og:description",
			content: article.value?.description ?? "",
		},
		{
			property: "og:url",
			content: `https://www.karatecarbonera.com${route.path}`,
		},
		{
			property: "og:image",
			content: article.value?.image
				? `https://www.karatecarbonera.com${article.value.image}`
				: "https://www.karatecarbonera.com/images/logo/logo.svg",
		},
		{ property: "og:type", content: "article" },
		{
			property: "article:published_time",
			content: article.value?.date ?? "",
		},
	],
	link: [
		{
			rel: "canonical",
			href: `https://www.karatecarbonera.com${route.path}`,
		},
	],
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: article.value?.title,
				description: article.value?.description,
				image: article.value?.image
					? `https://www.karatecarbonera.com${article.value.image}`
					: undefined,
				datePublished: article.value?.date,
				author: {
					"@type": "Organization",
					name: "Ki Kai Dojo ASD",
					url: "https://www.karatecarbonera.com",
				},
				publisher: {
					"@type": "Organization",
					name: "Ki Kai Dojo ASD",
					logo: {
						"@type": "ImageObject",
						url: "https://www.karatecarbonera.com/images/logo/logo.svg",
					},
				},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": `https://www.karatecarbonera.com${route.path}`,
				},
			}),
		},
	],
})
</script>
