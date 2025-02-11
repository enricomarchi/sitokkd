<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="false" />
		<main>
			<div class="bg-gray-50">
				<div
					class="px-8 md:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1920px]"
				>
					<Courses />
				</div>
			</div>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import Courses from "~/components/Courses.vue"
</script>
