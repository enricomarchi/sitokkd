<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="true" />
		<main>
			<HeroSection />
			<DojoAndPhilosophy />
			<Courses />
			<ContactSection />
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import DojoAndPhilosophy from "~/components/DojoAndPhilosophy.vue"
import Courses from "~/components/Courses.vue"
import ContactSection from "~/components/ContactSection.vue"
</script>

<style></style>
