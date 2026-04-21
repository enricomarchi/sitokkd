<template>
	<NuxtPage />
	<ClientOnly>
		<CookieBanner />
	</ClientOnly>
</template>

<script setup>
useHead({
	titleTemplate: "%s | Ki Kai Dojo – Karate Carbonera",
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

a:focus-visible,
button:focus-visible,
[role="button"]:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
	outline: 2px solid #f97316;
	outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}

	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
</style>
