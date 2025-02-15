<template>
	<div class="overflow-x-hidden">
		<NavBar :isHome="false" />
		<main>
			<Courses />
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
import Courses from "~/components/Courses.vue"
</script>
