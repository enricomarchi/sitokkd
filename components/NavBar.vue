<template>
	<nav
		class="fixed w-full z-50 transition-all duration-300"
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
	</nav>
</template>

<script setup>
const isScrolled = ref(false)

const checkScroll = () => {
	isScrolled.value = window.scrollY > 50
}

onMounted(() => {
	checkScroll()
	window.addEventListener("scroll", checkScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll)
})

const menuItems = [
	{ text: "Home", href: "#hero" },
	{ text: "La Palestra", href: "#about-dojo" },
	{ text: "Chi Sono", href: "#about-me" },
	{ text: "Corsi", href: "#courses" },
	{ text: "Contatti", href: "#contact" },
]

const logoImages = import.meta.glob("/public/images/logo/*.{svg,png}", {
	eager: true,
	import: "default",
})

const logoImage = "/images/logo/logo.svg" //Object.values(logoImages)[0]
</script>
