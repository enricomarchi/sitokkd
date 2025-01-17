<template>
	<section id="hero" class="h-screen relative overflow-hidden">
		<Swiper
			:modules="[SwiperAutoplay, SwiperEffectFade]"
			:slides-per-view="1"
			:effect="'fade'"
			:autoplay="{
				delay: 3000,
				disableOnInteraction: false,
			}"
			:speed="1000"
			:loop="true"
			class="h-full"
		>
			<SwiperSlide
				v-for="slide in currentSlides"
				:key="slide.image"
				class="h-full"
			>
				<img
					:src="slide.image"
					:alt="slide.alt"
					class="h-full w-full object-cover"
				/>
			</SwiperSlide>
		</Swiper>

		<div class="absolute inset-0 bg-black/50 z-10">
			<div
				class="container mx-auto px-4 h-full flex items-center justify-center"
			>
				<div class="text-center text-white space-y-6">
					<div class="space-y-2">
						<h2
							class="text-2xl md:text-3xl font-merienda text-red-500"
						>
							Scuola di Karate
						</h2>
						<h1
							class="text-5xl md:text-7xl font-bold font-merienda"
						>
							KI KAI DOJO
						</h1>
					</div>
					<p
						class="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
					>
						一期一会 (Ichigo Ichie)<br class="hidden md:block" />
						Ogni momento è unico e irripetibile
					</p>
					<div class="pt-8">
						<a
							href="#contact"
							class="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg"
						>
							Inizia il Tuo Percorso
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, EffectFade } from "swiper/modules"
import { ref, computed, onMounted, onUnmounted } from "vue"
import "swiper/css"
import "swiper/css/effect-fade"

const heroImages = import.meta.glob(
	"/public/images/hero/*.{jpg,jpeg,png,svg}",
	{
		eager: true,
		import: "default",
	}
)

const heroMobileImages = import.meta.glob(
	"/public/images/hero-mobile/*.{jpg,jpeg,png,svg}",
	{
		eager: true,
		import: "default",
	}
)

const isMobile = ref(false)

const desktopSlides = Object.entries(heroImages).map(([path, image]) => ({
	image,
	alt:
		path.split("/").pop()?.split(".")[0].replace(/-/g, " ") ||
		"Karate image",
}))

const mobileSlides = Object.entries(heroMobileImages).map(([path, image]) => ({
	image,
	alt:
		path.split("/").pop()?.split(".")[0].replace(/-/g, " ") ||
		"Karate image",
}))

const currentSlides = computed(() =>
	isMobile.value ? mobileSlides : desktopSlides
)

const handleResize = () => {
	isMobile.value = window?.innerWidth < 768
}

onMounted(() => {
	if (process.client) {
		isMobile.value = window.innerWidth < 768
		window.addEventListener("resize", handleResize)
	}
})

onUnmounted(() => {
	if (process.client) {
		window.removeEventListener("resize", handleResize)
	}
})

const SwiperAutoplay = Autoplay
const SwiperEffectFade = EffectFade
</script>

<style>
.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	width: 100%;
	height: 100%;
}

.swiper-slide img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

:root {
	--swiper-theme-color: #dc2626;
}
</style>
