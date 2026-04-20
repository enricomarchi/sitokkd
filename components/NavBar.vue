<template>
	<nav class="fixed w-full z-[40]" aria-label="Navigazione principale">
		<a
			href="#philosophy"
			class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:z-[1000]"
		>
			Vai al contenuto
		</a>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden fixed top-4 left-4 z-[999]"
			@click="toggleMenu"
			:aria-expanded="isMenuOpen"
			aria-controls="mobile-menu"
			aria-label="Menu di navigazione"
		>
			<div
				class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
				:class="[
					isMenuOpen
						? 'bg-white shadow-md'
						: isScrolled
							? 'bg-white/95 shadow-md'
							: 'bg-black/30 backdrop-blur-sm',
				]"
			>
				<svg
					class="w-5 h-5 transition-colors duration-300"
					:class="
						isMenuOpen || isScrolled ? 'text-ink-900' : 'text-white'
					"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						v-if="!isMenuOpen"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4 6h16M4 12h16M4 18h16"
					/>
					<path
						v-else
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
		</button>

		<!-- Mobile Menu Overlay -->
		<Transition name="mobile-menu">
			<div
				v-if="isMenuOpen"
				id="mobile-menu"
				class="fixed inset-0 bg-ink-950 z-[998] md:hidden flex items-center justify-center"
				@click.self="closeMenu"
				role="dialog"
				aria-modal="true"
				aria-label="Menu di navigazione"
			>
				<div class="text-center space-y-10">
					<a
						v-for="item in menuItems"
						:key="item.href"
						:href="item.href"
						class="block text-white/80 text-lg font-light uppercase tracking-[0.3em] hover:text-white transition-colors duration-300"
						@click="closeMenu"
					>
						{{ item.text }}
					</a>
				</div>
			</div>
		</Transition>

		<!-- Desktop Navigation -->
		<div
			class="hidden md:block transition-all duration-500"
			:class="[
				isScrolled
					? 'bg-white/95 backdrop-blur-md shadow-sm'
					: 'bg-transparent',
			]"
		>
			<div class="container mx-auto px-6 py-4">
				<div class="flex justify-between items-center">
					<a href="#hero" class="flex items-center gap-3 group">
						<img
							:src="logoImage"
							alt="KI KAI DOJO Logo"
							class="h-10 w-10 transition-all duration-300"
							:class="[
								isScrolled
									? 'brightness-100'
									: 'brightness-0 invert',
							]"
						/>
						<span
							class="text-xl font-heading font-bold tracking-wider transition-colors duration-300"
							:class="[
								isScrolled ? 'text-ink-900' : 'text-white',
							]"
						>
							KI KAI DOJO
						</span>
					</a>
					<div class="flex items-center space-x-8">
						<a
							v-for="item in menuItems"
							:key="item.href"
							:href="item.href"
							class="text-sm uppercase tracking-[0.15em] transition-colors duration-300"
							:class="[
								isScrolled
									? 'text-ink-500 hover:text-ink-900'
									: 'text-white/70 hover:text-white',
							]"
						>
							{{ item.text }}
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
	isScrolled.value = window.scrollY > 50
	if (isMenuOpen.value) closeMenu()
}

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
	document.body.style.overflow = isMenuOpen.value ? "hidden" : ""
}

const closeMenu = () => {
	isMenuOpen.value = false
	document.body.style.overflow = ""
}

onMounted(() => {
	checkScroll()
	window.addEventListener("scroll", checkScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll)
	document.body.style.overflow = ""
})

const menuItems = [
	{ text: "Filosofia", href: "#philosophy" },
	{ text: "Foto", href: "#gallery" },
	{ text: "Corsi", href: "#courses" },
	{ text: "Istruttori", href: "#instructors" },
	{ text: "Arbitri e PDG", href: "#referees" },
	{ text: "Contatti", href: "#contact" },
]

const logoImage = useRuntimeConfig().app.baseURL + "images/logo/logo.svg"
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: opacity 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
}
</style>
