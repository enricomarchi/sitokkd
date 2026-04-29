<template>
	<section id="gallery-preview" class="py-24 md:py-32 bg-ink-50">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Il nostro mondo
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Foto
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Momenti di allenamento, gare e vita del dojo
				</p>
			</div>

			<div
				v-if="displayedImages.length"
				class="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto"
			>
				<NuxtLink
					v-for="(image, idx) in displayedImages"
					:key="image.src + idx"
					to="/foto"
					class="block overflow-hidden rounded"
				>
					<img
						:src="image.thumb"
						:alt="image.alt"
						loading="lazy"
						class="w-full h-40 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
					/>
				</NuxtLink>
			</div>

			<div v-else class="text-center py-10 text-ink-300">
				<p>Nessuna foto disponibile.</p>
			</div>

			<div class="mt-10 text-center">
				<NuxtLink
					to="/foto"
					class="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-medium text-sm uppercase tracking-wider hover:bg-accent-600 transition-colors duration-300"
				>
					Vedi tutte
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({ count: { type: Number, default: 6 } })
const base = useRuntimeConfig().app.baseURL
const galleryImages = ref([])

const thumbUrl = (filename, mtime) => {
	const v = mtime ? `&v=${Math.floor(mtime)}` : ""
	if (import.meta.dev)
		return `${base}images/gallery/${encodeURIComponent(filename)}${mtime ? `?v=${Math.floor(mtime)}` : ""}`
	return `${base}api/thumb.php?src=gallery/${encodeURIComponent(filename)}&h=400${v}`
}

onMounted(async () => {
	const isLocalPreview =
		import.meta.client &&
		["localhost", "127.0.0.1"].includes(window.location.hostname)
	const endpoints =
		isLocalPreview || import.meta.dev
			? ["/api/gallery-images", `${base}api/gallery-images.php`]
			: [`${base}api/gallery-images.php`, "/api/gallery-images"]

	for (const url of endpoints) {
		try {
			const res = await fetch(url)
			if (!res.ok) continue
			const files = await res.json()
			// Normalizza: supporta sia array di stringhe che array di { name, mtime }
			const norm = files
				.map((f) =>
					typeof f === "string"
						? { name: f, mtime: null }
						: { name: f.name ?? f, mtime: f.mtime ?? null },
				)
				.sort((a, b) => b.name.localeCompare(a.name))
				.map((f) => ({
					src: `${base}images/gallery/${encodeURIComponent(f.name)}${f.mtime ? `?v=${Math.floor(f.mtime)}` : ""}`,
					thumb: thumbUrl(f.name, f.mtime),
					alt:
						f.name.split(".")[0].replace(/[-_]/g, " ") || "Gallery",
				}))
			galleryImages.value = norm
			break
		} catch {
			// try next endpoint
		}
	}
})

const displayedImages = computed(() =>
	(galleryImages.value ?? []).slice(0, props.count),
)
</script>
