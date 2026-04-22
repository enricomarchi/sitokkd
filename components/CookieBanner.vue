<template>
	<Transition name="banner">
		<div
			v-if="consent === null"
			class="fixed bottom-0 inset-x-0 z-[9999] p-4 md:p-6"
		>
			<div
				class="max-w-2xl mx-auto bg-ink-900 border border-white/10 p-6 shadow-2xl"
			>
				<p class="text-white/70 text-sm leading-relaxed mb-5">
					Questo sito utilizza cookie tecnici necessari al
					funzionamento e, con il tuo consenso, cookie analitici
					(Google Analytics) per migliorare l'esperienza utente.
					<NuxtLink
						to="/cookie-policy"
						class="text-accent-400 hover:text-accent-300 underline"
					>
						Cookie Policy
					</NuxtLink>
					·
					<NuxtLink
						to="/privacy-policy"
						class="text-accent-400 hover:text-accent-300 underline"
					>
						Privacy Policy
					</NuxtLink>
				</p>
				<div class="flex flex-wrap gap-3">
					<button
						class="px-6 py-2 bg-accent-500 text-white text-sm font-semibold hover:bg-accent-600 transition-colors"
						@click="accept"
					>
						Accetta tutto
					</button>
					<button
						class="px-6 py-2 bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
						@click="reject"
					>
						Solo necessari
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
const { consent, accept, reject } = useCookieConsent()
</script>

<style scoped>
.banner-enter-active,
.banner-leave-active {
	transition:
		transform 0.4s ease,
		opacity 0.4s ease;
}

.banner-enter-from,
.banner-leave-to {
	transform: translateY(100%);
	opacity: 0;
}
</style>
