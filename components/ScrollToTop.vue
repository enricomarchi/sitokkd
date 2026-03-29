<template>
	<Transition name="fade">
		<button
			v-show="isVisible"
			@click="scrollToTop"
			class="fixed bottom-6 right-6 z-50 bg-ink-900 hover:bg-accent-500 text-white w-10 h-10 flex items-center justify-center transition-colors duration-300"
			aria-label="Torna in cima alla pagina"
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
					stroke-width="1.5"
					d="M5 15l7-7 7 7"
				/>
			</svg>
		</button>
	</Transition>
</template>

<script setup>
const isVisible = ref(false)

const checkScroll = () => {
	isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
	window.addEventListener("scroll", checkScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
