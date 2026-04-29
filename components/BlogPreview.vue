<template>
	<section id="blog-preview" class="py-24 md:py-32 bg-ink-100">
		<div class="container mx-auto px-8 md:px-12">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Notizie
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Dal Blog
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Ultime notizie, aggiornamenti e eventi dal dojo.
				</p>
			</div>

			<div
				v-if="displayedArticles.length"
				class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				<NuxtLink
					v-for="article in displayedArticles"
					:key="article._path ?? article.slug"
					:to="article._path ?? '/blog/' + (article.slug ?? '')"
					class="group flex flex-col bg-white border border-ink-100 hover:border-ink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
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

					<div class="flex flex-col flex-1 p-6">
						<h3
							class="font-heading font-bold text-ink-900 text-lg leading-snug mb-3 group-hover:text-accent-600 transition-colors duration-300"
						>
							{{ article.title }}
						</h3>
						<p
							class="text-ink-400 text-sm leading-relaxed flex-1 line-clamp-3"
						>
							{{ article.description }}
						</p>

						<div
							class="flex items-center justify-between mt-4 pt-4 border-t border-ink-100"
						>
							<time
								:datetime="article.date"
								class="text-ink-300 text-xs"
								>{{ formatDate(article.date) }}</time
							>
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

			<div v-else class="text-center py-10 text-ink-300">
				<p>Nessun articolo disponibile.</p>
			</div>

			<div class="mt-10 text-center">
				<NuxtLink
					to="/blog"
					class="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-medium text-sm uppercase tracking-wider hover:bg-accent-600 transition-colors duration-300"
					>Vedi tutti</NuxtLink
				>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({ count: { type: Number, default: 3 } })

const { data: allArticles } = await useAsyncData(
	`home-blog-list-${props.count}`,
	() => queryCollection("blog").order("date", "DESC").all(),
)

const articles = computed(() =>
	(allArticles.value ?? []).filter((a) => a.published !== false),
)
const displayedArticles = computed(() =>
	(articles.value ?? []).slice(0, props.count),
)

function formatDate(dateStr: string) {
	if (!dateStr) return ""
	const d = new Date(dateStr)
	return d.toLocaleDateString("it-IT", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})
}
</script>

<style scoped></style>
