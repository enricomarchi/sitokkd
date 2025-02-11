<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="false" />
		<main>
			<div class="bg-white">
				<div
					class="px-8 md:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1920px]"
				>
					<ContactSection />
				</div>
			</div>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import ContactSection from "~/components/ContactSection.vue"
</script>
