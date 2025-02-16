<template>
	<nav class="fixed top-0 left-0 right-0 z-20">
		<div
			class="transition-all duration-300"
			:class="[
				isHome && !isScrolled
					? 'bg-transparent'
					: 'bg-black/90 backdrop-blur-sm shadow-sm',
			]"
		>
			<div
				class="mx-auto py-2 px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1920px]"
			>
				<div class="flex justify-between items-center">
					<a
						href="/"
						class="flex items-center gap-3 hover:opacity-90 transition-opacity"
					>
						<img
							:src="logoImage"
							alt="KI KAI DOJO Logo"
							class="h-12 w-12 transition-all brightness-0 invert"
						/>
						<span class="text-2xl font-bold text-white">
							KI KAI DOJO
						</span>
					</a>
					<!-- Menu Links (Desktop) -->
					<div class="hidden md:flex space-x-8 ml-auto">
						<a
							v-for="item in menuItems"
							:key="item.href"
							:href="item.href"
							class="text-white/90 hover:text-white transition-colors duration-300"
						>
							{{ item.text }}
						</a>
					</div>
					<!-- Menu Button (Mobile) -->
					<button
						class="md:hidden text-white p-2"
						@click="toggleMenu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu Dropdown -->
		<Transition name="slide-fade">
			<div
				v-if="isMenuOpen"
				class="md:hidden w-full bg-black/90 backdrop-blur-sm"
			>
				<div class="px-8 py-4 flex flex-col space-y-4">
					<a
						v-for="item in menuItems"
						:key="item.href"
						:href="item.href"
						class="text-white/90 hover:text-white transition-colors duration-300 text-lg"
						@click="closeMenu"
					>
						{{ item.text }}
					</a>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<script setup>
defineProps({
	isHome: {
		type: Boolean,
		default: false,
	},
})

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
	isScrolled.value = window.scrollY > 50
	if (isMenuOpen.value) {
		closeMenu()
	}
}

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
	if (isMenuOpen.value) {
		document.body.style.overflow = "hidden"
	} else {
		document.body.style.overflow = ""
	}
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
	{ text: "Home", href: "/" },
	{ text: "Palestre", href: "/palestra" },
	{ text: "Chi siamo", href: "/team" },
	{ text: "Corsi", href: "/corsi" },
	{ text: "Contatti", href: "/contatti" },
]

const logoImages = import.meta.glob("/public/images/logo/*.{svg,png}", {
	eager: true,
	import: "default",
})

const logoImage = "/images/logo/logo.svg"
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
