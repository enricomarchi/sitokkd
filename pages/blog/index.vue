<template>
	<div class="min-h-screen bg-white">
		<!-- Header -->
		<div class="bg-ink-950 pt-32 pb-20">
			<div class="container mx-auto px-6 text-center">
				<NuxtLink
					to="/"
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
					Torna alla home
				</NuxtLink>
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Notizie & Approfondimenti
				</p>
				<h1
					class="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
				>
					Blog
				</h1>
				<div class="w-12 h-px bg-accent-500 mx-auto mb-6" />
				<p class="text-white/50 max-w-xl mx-auto leading-relaxed">
					Aggiornamenti dal dojo, risultati sportivi, approfondimenti
					sul karate e notizie dalla nostra comunità.
				</p>
			</div>
		</div>

		<!-- Articoli -->
		<div class="container mx-auto px-6 py-20 max-w-5xl">
			<!-- Filtro tag -->
			<div
				v-if="allTags.length"
				class="flex flex-wrap gap-2 mb-12 justify-center"
			>
				<button
					@click="activeTag = null"
					:class="[
						'px-4 py-1.5 text-xs uppercase tracking-[0.15em] border transition-colors duration-300',
						activeTag === null
							? 'bg-ink-900 text-white border-ink-900'
							: 'bg-transparent text-ink-500 border-ink-200 hover:border-ink-900 hover:text-ink-900',
					]"
				>
					Tutti
				</button>
				<button
					v-for="tag in allTags"
					:key="tag"
					@click="activeTag = activeTag === tag ? null : tag"
					:class="[
						'px-4 py-1.5 text-xs uppercase tracking-[0.15em] border transition-colors duration-300',
						activeTag === tag
							? 'bg-accent-500 text-white border-accent-500'
							: 'bg-transparent text-ink-500 border-ink-200 hover:border-accent-500 hover:text-accent-500',
					]"
				>
					{{ tag }}
				</button>
			</div>

			<!-- Griglia articoli -->
			<div
				v-if="filteredArticles.length"
				class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				<NuxtLink
					v-for="article in filteredArticles"
					:key="article._path ?? article.slug"
					:to="article._path ?? '/blog/' + (article.slug ?? '')"
					class="group flex flex-col bg-white border border-ink-100 hover:border-ink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					<!-- Immagine -->
					<div
						v-if="article.image"
						class="overflow-hidden aspect-[16/9] bg-ink-100"
					>
						<img
							:src="article.image"
							:alt="article.title"
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
					<div
						v-else
						class="aspect-[16/9] bg-ink-950 flex items-center justify-center"
					>
						<span
							class="text-6xl text-ink-800 font-light select-none"
							>空</span
						>
					</div>

					<!-- Contenuto card -->
					<div class="flex flex-col flex-1 p-6">
						<h2
							class="font-heading font-bold text-ink-900 text-lg leading-snug mb-3 group-hover:text-accent-600 transition-colors duration-300"
						>
							{{ article.title }}
						</h2>
						<p
							class="text-ink-400 text-sm leading-relaxed flex-1 line-clamp-3"
						>
							{{ article.description }}
						</p>

						<!-- Footer card -->
						<div
							class="flex items-center justify-between mt-4 pt-4 border-t border-ink-100"
						>
							<time
								:datetime="article.date"
								class="text-ink-300 text-xs"
							>
								{{ formatDate(article.date) }}
							</time>
							<span
								class="text-accent-500 text-xs uppercase tracking-[0.15em] flex items-center gap-1"
							>
								Leggi
								<svg
									class="w-3 h-3"
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
							</span>
						</div>
					</div>
				</NuxtLink>
			</div>

			<div v-else class="text-center py-20 text-ink-300">
				<p class="text-lg">Nessun articolo trovato.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { data: allArticles } = await useAsyncData("blog-list", () =>
	queryCollection("blog").order("date", "DESC").all(),
)

// Filtra lato client: esclude solo gli articoli con published === false
const articles = computed(() =>
	(allArticles.value ?? []).filter((a) => a.published !== false),
)

const activeTag = ref<string | null>(null)

const allTags = computed(() => {
	const tags = new Set<string>()
	articles.value?.forEach((a) => a.tags?.forEach((t: string) => tags.add(t)))
	return Array.from(tags)
})

const filteredArticles = computed(() => {
	if (!activeTag.value) return articles.value ?? []
	return (articles.value ?? []).filter((a) =>
		a.tags?.includes(activeTag.value!),
	)
})

function formatDate(dateStr: string): string {
	if (!dateStr) return ""
	const d = new Date(dateStr)
	return d.toLocaleDateString("it-IT", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})
}

useHead({
	title: "Blog – Ki Kai Dojo | Karate Carbonera Treviso",
	meta: [
		{
			name: "description",
			content:
				"Notizie, eventi e approfondimenti dal Ki Kai Dojo di Carbonera. Risultati sportivi, stage, corsi karate Treviso.",
		},
		{
			property: "og:title",
			content: "Blog – Ki Kai Dojo Karate Carbonera",
		},
		{
			property: "og:description",
			content:
				"Notizie, eventi e approfondimenti dal Ki Kai Dojo di Carbonera.",
		},
		{ property: "og:url", content: "https://www.karatecarbonera.com/blog" },
		{ property: "og:type", content: "website" },
	],
	link: [{ rel: "canonical", href: "https://www.karatecarbonera.com/blog" }],
})
</script>
