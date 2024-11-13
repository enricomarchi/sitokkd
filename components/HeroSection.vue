<template>
	<section id="hero" class="h-screen relative overflow-hidden">
		<Swiper
			:modules="[SwiperAutoplay, SwiperEffectFade]"
			:slides-per-view="1"
			:effect="'fade'"
			:autoplay="{
				delay: 5000,
				disableOnInteraction: false,
			}"
			:speed="1000"
			:loop="true"
			class="h-full"
		>
			<SwiperSlide
				v-for="slide in slides"
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
				<div class="text-center text-white">
					<h1 class="text-5xl md:text-7xl font-bold mb-6">
						La Via del Karate
					</h1>
					<p class="text-xl md:text-2xl">
						Tradizione, Disciplina, Eccellenza
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

const heroImages = import.meta.glob(
	"/public/images/hero/*.{jpg,jpeg,png,svg}",
	{
		eager: true,
		import: "default",
	}
)

const slides = Object.entries(heroImages).map(([path, image]) => ({
	image,
	alt:
		path.split("/").pop()?.split(".")[0].replace(/-/g, " ") ||
		"Karate image",
}))

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
