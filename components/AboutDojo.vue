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
					Gallery
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Momenti di allenamento, gare e vita del dojo
				</p>
			</div>

			<div
				v-if="galleryImages.length"
				class="gallery-marquee overflow-hidden -mx-6"
			>
				<div class="marquee-track flex gap-3 md:gap-4">
					<div
						v-for="(image, index) in galleryImages"
						:key="'a-' + index"
						class="flex-shrink-0 overflow-hidden rounded"
					>
						<img
							:src="image.src"
							:alt="image.alt"
							loading="lazy"
							class="h-48 sm:h-64 md:h-80 w-auto object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
							@click="openLightbox(index)"
						/>
					</div>
					<!-- Duplicato per loop seamless -->
					<div
						v-for="(image, index) in galleryImages"
						:key="'b-' + index"
						class="flex-shrink-0 overflow-hidden rounded"
					>
						<img
							:src="image.src"
							:alt="image.alt"
							loading="lazy"
							class="h-48 sm:h-64 md:h-80 w-auto object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
							@click="openLightbox(index)"
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
const images = import.meta.glob(
	"/public/images/gallery/*.{jpg,jpeg,png,webp}",
	{ eager: true, import: "default" },
)

const galleryImages = Object.entries(images)
	.sort(([a], [b]) => b.localeCompare(a))
	.map(([path, src]) => ({
		src,
		alt:
			path.split("/").pop()?.split(".")[0].replace(/[-_]/g, " ") ||
			"Gallery",
	}))

const lightboxIndex = ref(null)

const openLightbox = (index) => {
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
		lightboxIndex.value < galleryImages.length - 1
	)
		lightboxIndex.value++
	if (e.key === "ArrowLeft" && lightboxIndex.value > 0) lightboxIndex.value--
}

onMounted(() => window.addEventListener("keydown", handleKeydown))
onUnmounted(() => window.removeEventListener("keydown", handleKeydown))
</script>

<style scoped>
.marquee-track {
	animation: marquee 30s linear infinite;
}

.gallery-marquee:hover .marquee-track {
	animation-play-state: paused;
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
