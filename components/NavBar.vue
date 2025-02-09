<template>
	<nav class="fixed w-full z-[40]">
		<!-- Mobile Menu Button -->
		<div
			class="md:hidden fixed top-4 left-4 z-[999]"
			:class="[isHome && !isScrolled ? 'opacity-0' : 'opacity-100']"
			@click="toggleMenu"
		>
			<div
				class="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
				:class="[
					isMenuOpen
						? 'bg-black/90'
						: isScrolled
						? 'bg-black/90'
						: 'bg-black/20',
				]"
			>
				<img
					:src="logoImage"
					alt="KI KAI DOJO Logo"
					class="h-10 w-10 pointer-events-none brightness-0 invert"
				/>
			</div>
		</div>

		<!-- Mobile Menu Overlay -->
		<div
			v-if="isMenuOpen"
			class="fixed inset-0 bg-black/95 z-[998] md:hidden flex items-center justify-center"
			@click.self="closeMenu"
		>
			<div class="text-center">
				<div class="space-y-8">
					<NuxtLink
						v-for="item in menuItems"
						:key="item.href"
						:to="item.href"
						class="block text-white text-2xl font-semibold hover:text-red-500 transition-colors"
						@click="closeMenu"
					>
						{{ item.text }}
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- Desktop Navigation -->
		<div
			class="hidden md:block transition-all duration-300"
			:class="[
				isHome && !isScrolled
					? 'bg-transparent'
					: 'bg-black/90 backdrop-blur-sm shadow-sm',
			]"
		>
			<div class="container mx-auto px-4 py-2">
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
						<h1 class="text-2xl font-bold text-white">
							KI KAI DOJO
						</h1>
					</a>
					<div class="hidden md:flex space-x-6">
						<a
							v-for="item in menuItems"
							:key="item.href"
							:href="item.href"
							class="text-white/90 hover:text-white transition-colors duration-300"
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
	{ text: "Le Palestre", href: "/palestra" },
	{ text: "Lo staff", href: "/istruttori" },
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
</style>
