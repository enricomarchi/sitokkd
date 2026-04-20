<template>
	<section id="hero" class="h-screen relative overflow-hidden">
		<!-- Background slideshow -->
		<div class="absolute inset-0">
			<TransitionGroup name="hero-fade">
				<img
					v-for="(slide, i) in currentSlides"
					v-show="i === activeIndex"
					:key="slide.image"
					:src="slide.image"
					:alt="slide.alt"
					:fetchpriority="i === 0 ? 'high' : 'low'"
					:loading="i === 0 ? 'eager' : 'lazy'"
					width="1920"
					height="1080"
					class="absolute inset-0 h-full w-full object-cover"
				/>
			</TransitionGroup>
		</div>

		<!-- Dark overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
		/>

		<!-- Content -->
		<div
			class="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
		>
			<div
				class="flex items-center gap-3 md:gap-6 mb-2"
				v-motion
				:initial="{ opacity: 0, y: 30 }"
				:enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
			>
				<img
					:src="
						useRuntimeConfig().app.baseURL + 'images/logo/logo.svg'
					"
					alt="Ki Kai Dojo logo"
					width="112"
					height="112"
					class="h-12 sm:h-20 md:h-28 w-auto drop-shadow-lg brightness-0 invert"
				/>
				<h1
					class="text-3xl sm:text-6xl md:text-8xl font-heading font-bold text-white tracking-wide leading-none whitespace-nowrap"
				>
					KI KAI DOJO
				</h1>
			</div>
			<p
				class="text-white/60 text-lg md:text-2xl uppercase tracking-[0.3em] mb-6"
				v-motion
				:initial="{ opacity: 0, y: 20 }"
				:enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
			>
				Scuola Karate Shotokan
			</p>
			<div
				class="w-16 h-px bg-accent-500 mb-6"
				v-motion
				:initial="{ opacity: 0, scale: 0 }"
				:enter="{ opacity: 1, scale: 1, transition: { delay: 600 } }"
			/>
			<p
				class="text-white/70 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-12"
				v-motion
				:initial="{ opacity: 0, y: 20 }"
				:enter="{ opacity: 1, y: 0, transition: { delay: 700 } }"
			>
				La via del karate è un cammino di disciplina,<br
					class="hidden sm:block"
				/>
				rispetto e crescita interiore
			</p>
			<div
				class="flex flex-col sm:flex-row gap-4"
				v-motion
				:initial="{ opacity: 0, y: 20 }"
				:enter="{ opacity: 1, y: 0, transition: { delay: 900 } }"
			>
				<a
					href="#courses"
					class="px-8 py-3 bg-white text-ink-900 text-sm uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-colors duration-300"
				>
					Scopri i Corsi
				</a>
				<a
					href="#contact"
					class="px-8 py-3 border border-white/40 text-white text-sm uppercase tracking-[0.15em] font-light hover:bg-white/10 transition-colors duration-300"
				>
					Prova Gratuita
				</a>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div
			class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
			v-motion
			:initial="{ opacity: 0 }"
			:enter="{ opacity: 1, transition: { delay: 1200 } }"
		>
			<div class="w-px h-12 bg-white/30 mx-auto mb-2 overflow-hidden">
				<div class="w-full h-full bg-white/70 animate-scroll-line" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL

const activeIndex = ref(0)
const slides = ref<{ image: string; alt: string }[]>([])
let interval: ReturnType<typeof setInterval>

const currentSlides = computed(() => slides.value)

onMounted(async () => {
	const url = import.meta.dev
		? "/api/hero-images"
		: `${base}api/hero-images.php`
	try {
		const res = await fetch(url)
		if (res.ok) {
			const files: string[] = await res.json()
			slides.value = files.map((f) => ({
				image: `${base}images/hero/${encodeURIComponent(f)}`,
				alt: f.split(".")[0].replace(/-/g, " "),
			}))
		}
	} catch {
		/* silently fail */
	}

	if (currentSlides.value.length > 1) {
		interval = setInterval(() => {
			activeIndex.value =
				(activeIndex.value + 1) % currentSlides.value.length
		}, 5000)
	}
})

onUnmounted(() => {
	clearInterval(interval)
})
</script>

<style>
.hero-fade-enter-active,
.hero-fade-leave-active {
	transition: opacity 1.5s ease;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
	opacity: 0;
}

@keyframes scroll-line {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(100%);
	}
}
.animate-scroll-line {
	animation: scroll-line 2s ease-in-out infinite;
}
</style>
