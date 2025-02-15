<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="true" />
		<main>
			<HeroSection />
			<Affiliations />

			<DojoAndPhilosophy />

			<Supporters />
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import DojoAndPhilosophy from "~/components/DojoAndPhilosophy.vue"
import Affiliations from "~/components/Affiliations.vue"
import Supporters from "~/components/Supporters.vue"
</script>

<style></style>
