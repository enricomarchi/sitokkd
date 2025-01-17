<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="true" />
		<main>
			<HeroSection />
			<AboutDojo />
			<KaratePhilosophy />
			<Courses />
			<ContactSection />
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import KaratePhilosophy from "~/components/KaratePhilosophy.vue"
import Courses from "~/components/Courses.vue"
import ContactSection from "~/components/ContactSection.vue"
</script>

<style></style>
