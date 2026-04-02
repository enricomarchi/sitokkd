<template>
	<section id="contact" class="py-24 md:py-32 bg-ink-50">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Vieni a trovarci
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Contatti
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					La prima lezione è gratuita e senza impegno.<br />
					Scrivici o passa in palestra, saremo felici di accoglierti.
				</p>
			</div>

			<!-- WhatsApp CTA -->
			<div
				class="max-w-3xl mx-auto mb-16 bg-ink-900 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
				v-motion
				:initial="{ opacity: 0, y: 30 }"
				:visible="{ opacity: 1, y: 0 }"
			>
				<div class="text-center md:text-left">
					<h3 class="text-xl font-heading font-bold text-white mb-2">
						Prenota la tua prova gratuita
					</h3>
					<p class="text-white/50 text-sm">
						Scrivici su WhatsApp per informazioni o per prenotare
					</p>
				</div>
				<a
					href="https://wa.me/393495630438?text=Ciao%2C%20vorrei%20info%20sulla%20lezione%20di%20prova%20gratuita"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-emerald-500 text-white font-medium px-6 py-3 text-sm uppercase tracking-wider hover:bg-emerald-600 transition-colors duration-300 whitespace-nowrap"
				>
					<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
						/>
					</svg>
					WhatsApp
				</a>
			</div>

			<!-- Info contatti -->
			<div
				class="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-2xl mx-auto mb-16"
			>
				<a
					href="tel:+393495630438"
					class="text-ink-400 text-sm hover:text-accent-500 transition-colors flex items-center gap-2"
				>
					<svg
						class="w-4 h-4 text-ink-300"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
						/>
					</svg>
					+39 349 563 0438
				</a>
				<a
					href="mailto:moreno@karatecarbonera.com"
					class="text-ink-400 text-sm hover:text-accent-500 transition-colors flex items-center gap-2"
				>
					<svg
						class="w-4 h-4 text-ink-300"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					moreno@karatecarbonera.com
				</a>
			</div>

			<!-- Le nostre sedi con mappe -->
			<div class="max-w-5xl mx-auto">
				<h3
					class="text-xs font-bold text-ink-500 uppercase tracking-[0.2em] text-center mb-10"
				>
					Le Nostre Sedi
				</h3>
				<div class="grid md:grid-cols-3 gap-8">
					<div
						v-for="sede in sedi"
						:key="sede.nome"
						class="bg-white overflow-hidden"
						v-motion
						:initial="{ opacity: 0, y: 30 }"
						:visible="{ opacity: 1, y: 0 }"
					>
						<iframe
							:src="sede.embedUrl"
							width="100%"
							height="200"
							style="
								border: 0;
								filter: grayscale(1) contrast(1.1);
							"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							:title="`Mappa ${sede.nome}`"
						></iframe>
						<div class="p-5 text-center">
							<h4
								class="text-sm font-heading font-bold text-ink-900 uppercase tracking-wider mb-2"
							>
								{{ sede.nome }}
							</h4>
							<a
								:href="sede.mapsLink"
								target="_blank"
								rel="noopener noreferrer"
								class="text-ink-400 text-xs leading-relaxed hover:text-accent-500 transition-colors"
							>
								{{ sede.indirizzo }}
							</a>
							<div class="mt-3 pt-3 border-t border-ink-100">
								<p
									class="text-xs font-semibold text-ink-700 mb-1"
								>
									{{ sede.giorni }}
								</p>
								<p class="text-xs text-ink-400">
									{{ sede.orario }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const sedi = [
	{
		nome: "Scuole Medie Carbonera",
		indirizzo: "Viale Brigata Marche, 9 – Carbonera",
		giorni: "Martedì, Giovedì e Venerdì",
		orario: "17:00 – 22:00",
		mapsLink:
			"https://maps.google.com/?q=Viale+Brigata+Marche+9,+31030+Carbonera+TV",
		embedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5!2d12.2789!3d45.6669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477957b0a3c6b8e1%3A0x0!2sViale%20Brigata%20Marche%209%2C%2031030%20Carbonera%20TV!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit",
	},
	{
		nome: "Scuola Primaria Saletto",
		indirizzo: "Via Davanzo Sergente, 52 – Saletto",
		giorni: "Lunedì e Mercoledì",
		orario: "17:00 – 19:00",
		mapsLink:
			"https://maps.google.com/?q=Via+Davanzo+Sergente+52,+31030+Saletto+TV",
		embedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5!2d12.2650!3d45.6550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia%20Davanzo%20Sergente%2052%2C%2031030%20Saletto%20TV!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit",
	},
	{
		nome: "Scuola Primaria Tino Anselmi",
		indirizzo: "Via IV Novembre, 30 – Carbonera",
		giorni: "Giovedì",
		orario: "17:00 – 18:00",
		mapsLink:
			"https://maps.google.com/?q=Via+IV+Novembre+30,+31030+Carbonera+TV",
		embedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5!2d12.2789!3d45.6669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477957b0a3c6b8e1%3A0x0!2sVia%20IV%20Novembre%2030%2C%2031030%20Carbonera%20TV!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit",
	},
]
</script>
