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

const GA_ID = "G-PTECPP66SD"

const { consent } = useCookieConsent()

function loadGA() {
	if (!import.meta.client) return
	if (document.querySelector(`script[src*="${GA_ID}"]`)) return
	const script = document.createElement("script")
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
	document.head.appendChild(script)
	window.dataLayer = window.dataLayer || []
	window.gtag = function () {
		window.dataLayer.push(arguments)
	}
	window.gtag("js", new Date())
	window.gtag("config", GA_ID, { anonymize_ip: true })
}

watch(
	consent,
	(val) => {
		if (val === "accepted") loadGA()
	},
	{ immediate: true },
)
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
