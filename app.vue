<template>
	<NuxtPage />
</template>

<script setup>
useHead({
	titleTemplate: "%s | KI KAI DOJO",
	htmlAttrs: {
		class: "overflow-x-hidden",
	},
})
</script>

<style>
html {
	overflow-x: hidden;
	width: 100%;
	position: relative;
	scroll-behavior: smooth;
}

body {
	overflow-x: hidden;
	width: 100%;
	position: relative;
	font-family: "Inter", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Oswald", sans-serif;
}

@media (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
}
</style>
