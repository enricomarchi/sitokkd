<template>
	<div class="min-h-screen bg-ink-50">
		<div class="container mx-auto px-6 py-20 max-w-6xl">
			<div class="max-w-2xl mx-auto text-center mb-12">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Il nostro mondo
				</p>
				<h1
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Foto
				</h1>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6"></div>
				<p class="text-ink-400 leading-relaxed">
					Momenti di allenamento, gare e vita del dojo
				</p>
			</div>

			<div
				v-if="images.length"
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-6xl mx-auto"
			>
				<button
					v-for="(img, idx) in images"
					:key="img.src + idx"
					type="button"
					@click="open(idx)"
					class="block overflow-hidden rounded"
				>
					<img
						:src="img.thumb"
						:alt="img.alt"
						loading="lazy"
						style="aspect-ratio: 1 / 1"
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					/>
				</button>
			</div>

			<div v-else class="text-center py-10 text-ink-300">
				<p>Nessuna foto disponibile.</p>
			</div>

			<!-- Lightbox / Fullscreen -->
			<div
				v-if="activeIndex !== -1"
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
				@click.self="close"
			>
				<button
					class="absolute top-6 right-6 text-white bg-black/40 rounded-full p-3"
					@click="close"
					aria-label="Chiudi"
				>
					✕
				</button>

				<button
					v-if="activeIndex > 0"
					class="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 bg-black/30 rounded-full"
					@click.stop="prev"
					aria-label="Immagine precedente"
				>
					‹
				</button>

				<img
					:src="images[activeIndex].src"
					:alt="images[activeIndex].alt"
					class="max-h-[90vh] max-w-full object-contain rounded"
				/>

				<button
					v-if="activeIndex < images.length - 1"
					class="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 bg-black/30 rounded-full"
					@click.stop="next"
					aria-label="Immagine successiva"
				>
					›
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	title: "Foto – Ki Kai Dojo | Karate Carbonera",
	meta: [
		{
			name: "description",
			content: "Galleria fotografica: allenamenti, gare e vita del dojo.",
		},
		{ property: "og:title", content: "Foto – Ki Kai Dojo" },
		{
			property: "og:description",
			content: "Galleria fotografica del Ki Kai Dojo a Carbonera.",
		},
		{ property: "og:url", content: "https://www.karatecarbonera.com/foto" },
	],
	link: [{ rel: "canonical", href: "https://www.karatecarbonera.com/foto" }],
})

const base = useRuntimeConfig().app.baseURL
const { data } = await useAsyncData("foto-images", () =>
	$fetch("/api/gallery-images"),
)
const files = data.value ?? []

// Normalizza l'output: supporta sia array di stringhe che array di { name, mtime }
const normalized = computed(() =>
	(files || []).map((f) =>
		typeof f === "string"
			? { name: f, mtime: null }
			: { name: f.name ?? f, mtime: f.mtime ?? null },
	),
)

const thumbUrl = (filename, mtime) => {
	const v = mtime ? `&v=${Math.floor(mtime)}` : ""
	if (import.meta.dev)
		return `${base}images/gallery/${encodeURIComponent(filename)}${mtime ? `?v=${Math.floor(mtime)}` : ""}`
	return `${base}api/thumb.php?src=gallery/${encodeURIComponent(filename)}&h=600${v}`
}

const images = computed(() =>
	(normalized.value || [])
		.slice()
		.sort((a, b) => b.name.localeCompare(a.name))
		.map((f) => ({
			src: `${base}images/gallery/${encodeURIComponent(f.name)}${f.mtime ? `?v=${Math.floor(f.mtime)}` : ""}`,
			thumb: thumbUrl(f.name, f.mtime),
			alt: f.name.split(".")[0].replace(/[-_]/g, " ") || "Gallery",
		})),
)

const activeIndex = ref(-1)

const open = (i) => {
	activeIndex.value = i
	if (process.client) document.body.style.overflow = "hidden"
}
const close = () => {
	activeIndex.value = -1
	if (process.client) document.body.style.overflow = ""
}
const next = () => {
	if (activeIndex.value < images.value.length - 1) activeIndex.value++
}
const prev = () => {
	if (activeIndex.value > 0) activeIndex.value--
}

function onKey(e) {
	if (activeIndex.value === -1) return
	if (e.key === "Escape") close()
	if (e.key === "ArrowRight") next()
	if (e.key === "ArrowLeft") prev()
}

onMounted(() => {
	window.addEventListener("keydown", onKey)
})
onUnmounted(() => {
	window.removeEventListener("keydown", onKey)
	document.body.style.overflow = ""
})
</script>
