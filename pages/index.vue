<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="true" />
		<main>
			<HeroSection />
			<Affiliations />
			<div>
				<div class="bg-white">
					<div
						class="px-8 md:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1920px]"
					>
						<DojoAndPhilosophy />
					</div>
				</div>
			</div>
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
