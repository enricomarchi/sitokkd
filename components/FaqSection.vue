<template>
	<section id="faq" class="py-24 md:py-32 bg-white">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Hai domande?
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Domande Frequenti
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Le risposte alle domande più comuni sul nostro dojo e i
					corsi di karate
				</p>
			</div>

			<div class="max-w-3xl mx-auto space-y-4">
				<div
					v-for="(faq, idx) in faqs"
					:key="idx"
					class="border border-ink-100"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{
						opacity: 1,
						y: 0,
						transition: { delay: idx * 60 },
					}"
				>
					<button
						class="w-full flex items-center justify-between px-6 py-5 text-left"
						@click="toggle(idx)"
						:aria-expanded="openIndex === idx"
						:aria-controls="`faq-answer-${idx}`"
					>
						<h3
							class="text-sm md:text-base font-heading font-bold text-ink-900 uppercase tracking-wider pr-4"
						>
							{{ faq.question }}
						</h3>
						<svg
							class="w-4 h-4 text-ink-400 flex-shrink-0 transition-transform duration-300"
							:class="{ 'rotate-180': openIndex === idx }"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					<div
						:id="`faq-answer-${idx}`"
						role="region"
						class="overflow-hidden transition-all duration-300"
						:class="
							openIndex === idx ? 'max-h-96 pb-6' : 'max-h-0'
						"
					>
						<p class="px-6 text-ink-400 text-sm leading-relaxed">
							{{ faq.answer }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const openIndex = ref(null)

const toggle = (idx) => {
	openIndex.value = openIndex.value === idx ? null : idx
}

const faqs = [
	{
		question: "Dove si trova la scuola di karate Ki Kai Dojo a Carbonera?",
		answer: "La sede principale del Ki Kai Dojo si trova presso le Scuole Medie di Carbonera, in Viale Brigata Marche 9, 31030 Carbonera (TV). Abbiamo anche sedi a Saletto (Via Sergente Davanzo 52) e presso la Scuola Primaria Tina Anselmi (Via IV Novembre 30, Carbonera).",
	},
	{
		question: "A che età si può iniziare il karate?",
		answer: "Al Ki Kai Dojo accogliamo bambini a partire dai 4 anni con il corso Tigrotti, un programma di avviamento ludico-motorio al karate. I bambini più grandi possono accedere ai corsi di cinture colorate e, crescendo, ai corsi agonistici per ragazzi.",
	},
	{
		question: "Quanto costa un corso di karate al Ki Kai Dojo?",
		answer: "Per conoscere le tariffe aggiornate ti invitiamo a contattarci direttamente via WhatsApp al 349 563 0438 o via email a moreno@karatecarbonera.com. La prima lezione di prova è sempre gratuita e senza impegno.",
	},
	{
		question: "Che stile di karate insegnate?",
		answer: "Pratichiamo il Karate Shotokan tradizionale, lo stile fondato dal Maestro Gichin Funakoshi. Il nostro dojo è affiliato alla FIKTA (Federazione Italiana Karate Tradizionale), alla FIJLKAM, all'AICS e alla Libertas.",
	},
	{
		question: "Quali sono gli orari dei corsi di karate a Carbonera?",
		answer: "Sede Scuole Medie Carbonera: martedì e venerdì 17:00–22:00. Sede Saletto: lunedì e mercoledì 17:00–19:00. Sede Tina Anselmi: giovedì 17:00–18:00. Per gli orari dettagliati di ogni singolo corso, contattaci.",
	},
	{
		question: "Offrite corsi di difesa personale a Treviso?",
		answer: "Sì, offriamo un corso di difesa personale basato sul Krav Maga presso la sede Tina Anselmi a Carbonera, a pochi minuti da Treviso. Il corso è aperto a tutti, anche a chi non ha esperienza nelle arti marziali.",
	},
	{
		question: "La prima lezione è gratuita?",
		answer: "Sì! La prima lezione di prova è sempre gratuita e senza impegno. Basta presentarsi in palestra con un abbigliamento comodo o contattarci su WhatsApp per prenotare.",
	},
	{
		question: "Chi è il Maestro Moreno Donà?",
		answer: "Il Maestro Moreno Donà è il fondatore del Ki Kai Dojo. Con il grado di 7° Dan e oltre 30 anni di esperienza, ha formato più di 500 allievi e oltre 50 cinture nere. Il suo approccio unisce il rigore della tradizione giapponese alla capacità di adattare l'insegnamento a ogni allievo.",
	},
]
</script>
