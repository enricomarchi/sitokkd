<template>
	<section id="philosophy" class="py-24 md:py-32 bg-ink-50">
		<div class="container mx-auto px-6">
			<!-- Section intro -->
			<div class="max-w-2xl mx-auto text-center mb-20">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					La nostra filosofia
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Il Karate Shotokan: Più di uno Sport
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Il karate non è solo tecnica: è un percorso di crescita che
					plasma corpo e mente. Al Ki Kai Dojo coltiviamo questi
					valori in ogni lezione.
				</p>
			</div>

			<!-- Values grid -->
			<div class="grid md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
				<div
					v-for="(value, idx) in values"
					:key="value.title"
					class="text-center group"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<!-- Kanji -->
					<div
						:class="[
							'text-5xl md:text-6xl mb-4 transition-colors duration-700 font-light select-none',
							activeKanji === idx
								? 'text-accent-500'
								: 'text-ink-200',
						]"
					>
						{{ value.kanji }}
					</div>
					<h3
						class="text-lg font-heading font-bold text-ink-900 uppercase tracking-wider mb-3"
					>
						{{ value.title }}
					</h3>
					<p
						class="text-ink-400 text-sm leading-relaxed max-w-xs mx-auto"
					>
						{{ value.description }}
					</p>
				</div>
			</div>

			<!-- Quote -->
			<div class="max-w-3xl mx-auto mt-24 text-center">
				<blockquote class="relative">
					<span
						class="text-ink-100 text-8xl font-serif absolute -top-8 left-0 select-none"
						>&ldquo;</span
					>
					<p
						class="text-ink-600 text-lg md:text-xl italic leading-relaxed px-8"
					>
						Il karate è come l'acqua calda: se non le fornisci
						calore costantemente, ritorna ad essere acqua fredda.
					</p>
					<footer
						class="mt-4 text-ink-400 text-sm uppercase tracking-wider"
					>
						&mdash; Gichin Funakoshi
					</footer>
				</blockquote>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const values = [
	{
		kanji: "礼",
		title: "Rispetto",
		description:
			"Il rispetto per sé stessi, per il compagno di allenamento e per il maestro è il fondamento di ogni pratica nel dojo.",
	},
	{
		kanji: "忍",
		title: "Perseveranza",
		description:
			"La costanza e la determinazione nel migliorarsi giorno dopo giorno, superando i propri limiti con pazienza.",
	},
	{
		kanji: "和",
		title: "Armonia",
		description:
			"L'equilibrio tra forza e gentilezza, tra corpo e mente. Un cammino verso la completezza interiore.",
	},
]

const activeKanji = ref(0)
let interval = null

onMounted(() => {
	interval = setInterval(() => {
		activeKanji.value = (activeKanji.value + 1) % values.length
	}, 2000)
})

onBeforeUnmount(() => {
	clearInterval(interval)
})
</script>
