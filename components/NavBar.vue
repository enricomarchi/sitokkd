<template>
	<nav class="fixed w-full z-[40]">
		<!-- Mobile Menu Button -->
		<div 
			class="md:hidden fixed top-4 left-4 z-[999]"
			@click="toggleMenu"
		>
			<div 
				class="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
				:class="[
					isMenuOpen ? 'bg-white' : (isScrolled ? 'bg-white/90' : 'bg-black/20'),
				]"
			>
				<img
					:src="logoImage"
					alt="KI KAI DOJO Logo"
					class="h-10 w-10 pointer-events-none"
					:class="[
						isMenuOpen || isScrolled
							? 'brightness-100'
							: 'brightness-0 invert',
					]"
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
					<a
						v-for="item in menuItems"
						:key="item.href"
						:href="item.href"
						class="block text-white text-2xl font-semibold hover:text-red-500 transition-colors"
						@click="closeMenu"
					>
						{{ item.text }}
					</a>
				</div>
			</div>
		</div>

		<!-- Desktop Navigation -->
		<div 
			class="hidden md:block transition-all duration-300"
			:class="[
				isScrolled
					? 'bg-white/90 backdrop-blur-sm shadow-sm'
					: 'bg-transparent',
			]"
		>
			<div class="container mx-auto px-4 py-2">
				<div class="flex justify-between items-center">
					<a
						href="#hero"
						class="flex items-center gap-3 hover:opacity-90 transition-opacity"
					>
						<img
							:src="logoImage"
							alt="KI KAI DOJO Logo"
							class="h-12 w-12"
							:class="[
								isScrolled
									? 'brightness-100'
									: 'brightness-0 invert',
							]"
						/>
						<h1
							class="text-2xl font-bold transition-colors duration-300"
							:class="[isScrolled ? 'text-gray-900' : 'text-white']"
						>
							KI KAI DOJO
						</h1>
					</a>
					<div class="hidden md:flex space-x-6">
						<a
							v-for="item in menuItems"
							:key="item.href"
							:href="item.href"
							class="transition-colors duration-300"
							:class="[
								isScrolled
									? 'text-gray-700 hover:text-black'
									: 'text-white/90 hover:text-white',
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
	if (isMenuOpen.value) {
		closeMenu()
	}
}

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
	if (isMenuOpen.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}
}

const closeMenu = () => {
	isMenuOpen.value = false
	document.body.style.overflow = ''
}

onMounted(() => {
	checkScroll()
	window.addEventListener("scroll", checkScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll)
	document.body.style.overflow = ''
})

const menuItems = [
	{ text: "Home", href: "#hero" },
	{ text: "La Palestra", href: "#about-dojo" },
	{ text: "Istruttori", href: "#about-me" },
	{ text: "Corsi", href: "#courses" },
	{ text: "Contatti", href: "#contact" },
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