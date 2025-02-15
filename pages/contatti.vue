<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="false" />
		<main>
			<ContactSection />
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import ContactSection from "~/components/ContactSection.vue"
</script>
