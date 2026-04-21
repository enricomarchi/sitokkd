<template>
	<section id="gallery" class="py-24 md:py-32 bg-ink-50">
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
				v-if="galleryImages.length"
				ref="galleryEl"
				class="gallery-marquee overflow-x-auto -mx-6 px-6 pb-2 cursor-grab active:cursor-grabbing"
				@pointerdown="onDragStart"
				@wheel.passive="onInteractionStart"
			>
				<div
					class="marquee-track flex gap-3 md:gap-4"
					:class="{ 'is-paused': isPaused }"
				>
					<div
						v-for="(image, index) in galleryImages"
						:key="'a-' + index"
						class="flex-shrink-0 overflow-hidden rounded"
					>
						<img
							:src="image.thumb"
							:alt="image.alt"
							:data-gallery-index="index"
							loading="lazy"
							draggable="false"
							class="h-48 sm:h-64 md:h-80 w-auto object-cover hover:scale-105 transition-transform duration-700 cursor-pointer select-none"
						/>
					</div>
					<!-- Duplicato per loop seamless -->
					<div
						v-for="(image, index) in galleryImages"
						:key="'b-' + index"
						class="flex-shrink-0 overflow-hidden rounded"
					>
						<img
							:src="image.thumb"
							:alt="image.alt"
							:data-gallery-index="index"
							loading="lazy"
							draggable="false"
							class="h-48 sm:h-64 md:h-80 w-auto object-cover hover:scale-105 transition-transform duration-700 cursor-pointer select-none"
						/>
					</div>
				</div>
			</div>

			<!-- Lightbox -->
			<Teleport to="body">
				<Transition name="lightbox-fade">
					<div
						v-if="lightboxIndex !== null"
						class="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center"
						@click.self="closeLightbox"
					>
						<button
							class="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none transition-colors"
							@click="closeLightbox"
							aria-label="Chiudi"
						>
							&times;
						</button>
						<button
							v-if="lightboxIndex > 0"
							class="absolute left-4 md:left-8 text-white/40 hover:text-white text-4xl leading-none transition-colors"
							@click="lightboxIndex--"
							aria-label="Precedente"
						>
							&#8249;
						</button>
						<img
							:src="galleryImages[lightboxIndex].src"
							:alt="galleryImages[lightboxIndex].alt"
							class="max-h-[90vh] max-w-[90vw] object-contain"
						/>
						<button
							v-if="lightboxIndex < galleryImages.length - 1"
							class="absolute right-4 md:right-8 text-white/40 hover:text-white text-4xl leading-none transition-colors"
							@click="lightboxIndex++"
							aria-label="Successiva"
						>
							&#8250;
						</button>
					</div>
				</Transition>
			</Teleport>
		</div>
	</section>
</template>

<script setup>
const base = useRuntimeConfig().app.baseURL

const galleryImages = ref([])

const thumbUrl = (filename) => {
	if (import.meta.dev) {
		return `${base}images/gallery/${encodeURIComponent(filename)}`
	}
	return `${base}api/thumb.php?src=gallery/${encodeURIComponent(filename)}&h=400`
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
			galleryImages.value = files
				.sort((a, b) => b.localeCompare(a))
				.map((f) => ({
					src: `${base}images/gallery/${encodeURIComponent(f)}`,
					thumb: thumbUrl(f),
					alt: f.split(".")[0].replace(/[-_]/g, " ") || "Gallery",
				}))
			break
		} catch {
			/* try next endpoint */
		}
	}

	window.addEventListener("keydown", handleKeydown)
})

const lightboxIndex = ref(null)
let lastDragAt = 0

const openLightbox = (index) => {
	if (Date.now() - lastDragAt < 180) {
		return
	}
	lightboxIndex.value = index
}

const closeLightbox = () => {
	lightboxIndex.value = null
}

const handleKeydown = (e) => {
	if (lightboxIndex.value === null) return
	if (e.key === "Escape") closeLightbox()
	if (
		e.key === "ArrowRight" &&
		lightboxIndex.value < galleryImages.value.length - 1
	)
		lightboxIndex.value++
	if (e.key === "ArrowLeft" && lightboxIndex.value > 0) lightboxIndex.value--
}

onUnmounted(() => window.removeEventListener("keydown", handleKeydown))

// Gallery interaction: pause auto-scroll on manual interaction, resume after 4s
const galleryEl = ref(null)
const isPaused = ref(false)
let resumeTimeout = null

const onInteractionStart = () => {
	isPaused.value = true
	if (resumeTimeout) clearTimeout(resumeTimeout)
	resumeTimeout = setTimeout(() => {
		isPaused.value = false
	}, 4000)
}

// Drag-to-scroll
let isDragging = false
let dragMoved = false
let startX = 0
let scrollStart = 0

const onDragStart = (e) => {
	onInteractionStart()
	const el = galleryEl.value
	if (!el) return
	dragMoved = false
	isDragging = true
	startX = e.clientX
	scrollStart = el.scrollLeft
	el.addEventListener("pointermove", onDragMove)
	el.addEventListener("pointerup", onDragEnd)
	el.addEventListener("pointercancel", onDragEnd)
}

const onDragMove = (e) => {
	if (!isDragging) return
	const el = galleryEl.value
	if (!el) return
	const dx = e.clientX - startX
	if (Math.abs(dx) > 8) dragMoved = true
	el.scrollLeft = scrollStart - dx
}

const onDragEnd = (e) => {
	isDragging = false
	const el = galleryEl.value
	if (!el) return
	el.removeEventListener("pointermove", onDragMove)
	el.removeEventListener("pointerup", onDragEnd)
	el.removeEventListener("pointercancel", onDragEnd)
	if (dragMoved) {
		lastDragAt = Date.now()
		return
	}

	const target = e.target
	if (!(target instanceof Element)) return
	const image = target.closest("img[data-gallery-index]")
	if (!image) return
	const index = Number(image.getAttribute("data-gallery-index"))
	if (Number.isInteger(index)) openLightbox(index)
}

onUnmounted(() => {
	if (resumeTimeout) clearTimeout(resumeTimeout)
})
</script>

<style scoped>
.marquee-track {
	animation: marquee 30s linear infinite;
}

.marquee-track.is-paused,
.gallery-marquee:hover .marquee-track {
	animation-play-state: paused;
}

.gallery-marquee {
	scrollbar-width: thin;
	scrollbar-color: #d1d1d1 transparent;
}

.gallery-marquee::-webkit-scrollbar {
	height: 6px;
}
.gallery-marquee::-webkit-scrollbar-track {
	background: transparent;
}
.gallery-marquee::-webkit-scrollbar-thumb {
	background: #d1d1d1;
	border-radius: 3px;
}
.gallery-marquee::-webkit-scrollbar-thumb:hover {
	background: #b0b0b0;
}

@keyframes marquee {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
	transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
	opacity: 0;
}
</style>
