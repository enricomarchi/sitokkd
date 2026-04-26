<template>
	<section id="faq" class="py-24 md:py-32 bg-white">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Hai qualche dubbio?
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Domande Frequenti
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Tutto quello che devi sapere prima di iniziare il tuo
					percorso nel karate a Treviso
				</p>
			</div>

			<div class="max-w-3xl mx-auto divide-y divide-ink-100">
				<div
					v-for="(faq, index) in faqs"
					:key="index"
					class="py-6"
					v-motion
					:initial="{ opacity: 0, y: 20 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<button
						class="w-full flex items-start justify-between gap-4 text-left group"
						:aria-expanded="openIndex === index"
						@click="toggle(index)"
					>
						<h3
							class="text-base md:text-lg font-heading font-bold text-ink-900 group-hover:text-accent-500 transition-colors duration-200"
						>
							{{ faq.question }}
						</h3>
						<span
							class="flex-shrink-0 w-6 h-6 flex items-center justify-center text-accent-500 transition-transform duration-300"
							:class="openIndex === index ? 'rotate-45' : ''"
							aria-hidden="true"
						>
							<svg
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
						</span>
					</button>
					<Transition name="faq-expand">
						<p
							v-if="openIndex === index"
							class="mt-4 text-ink-500 leading-relaxed text-sm md:text-base"
						>
							{{ faq.answer }}
						</p>
					</Transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const openIndex = ref(null)

function toggle(index) {
	openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
	{
		question: "Dove posso trovare dei corsi di karate vicino a Treviso?",
		answer: "Il Ki Kai Dojo offre corsi di karate in tre sedi nel comune di Carbonera (TV), a pochi minuti da Treviso: la sede principale presso le Scuole Medie di Carbonera (Viale Brigata Marche), la sede di Saletto e la sede Tina Anselmi (palestra della scuola primaria di Carbonera). Siamo facilmente raggiungibili da Treviso e da tutta l'area nord-est della provincia.",
	},
	{
		question: "A che età i bambini possono iniziare il karate?",
		answer: "I bambini possono iniziare il karate già a partire dai 4 anni. Il corso Tigrotti è pensato appositamente per i più piccoli con un approccio ludico-motorio, mentre i corsi per bambini principianti e cinture colorate accolgono i ragazzi nelle fasce d'età successive. Il karate è ideale per sviluppare coordinazione, concentrazione, autodisciplina e rispetto fin da piccoli.",
	},
	{
		question: "Ci sono corsi di karate per adulti principianti a Treviso?",
		answer: "Sì, il Ki Kai Dojo propone corsi di karate per adulti principianti aperti a chiunque voglia avvicinarsi all'arte marziale, indipendentemente dall'età o dalla forma fisica. Gli adulti possono frequentare anche i corsi di difesa personale. Non serve nessuna esperienza precedente: si inizia dalle basi.",
	},
	{
		question: "Cos'è il Karate Shotokan?",
		answer: "Il Karate Shotokan è uno dei più diffusi stili di karate tradizionale giapponese, fondato dal Maestro Gichin Funakoshi. Si basa su tre pilastri: kihon (tecniche di base), kata (sequenze codificate di movimenti) e kumite (combattimento controllato). È uno stile completo che sviluppa forza, velocità, equilibrio e concentrazione mentale. Al Ki Kai Dojo lo pratichiamo dal 1982.",
	},
	{
		question: "La prima lezione di karate è gratuita?",
		answer: "Sì, la prima lezione è completamente gratuita e senza impegno. Puoi venire a provare, conoscere il Maestro Moreno Donà e i nostri istruttori, e capire se il karate fa per te o per il tuo bambino. Contattaci via WhatsApp o telefono per prenotare la tua lezione di prova.",
	},
	{
		question: "Offrite corsi di difesa personale?",
		answer: "Sì. Nella sede Tina Anselmi è attivo un corso di difesa personale aperto a uomini e donne. Il corso insegna come prevenire situazioni di pericolo e come reagire efficacemente in caso di necessità, attraverso tecniche provate e realistiche.",
	},
	{
		question: "Come faccio a iscrivermi ai corsi di karate?",
		answer: "Il modo più semplice è scriverci su WhatsApp al numero +39 349 563 0438 oppure mandarci una email a moreno@karatecarbonera.com. Puoi anche passare direttamente in palestra durante un allenamento per chiedere informazioni. Il primo allenamento, gratuito e senza impegno, si concorda dopo un primo contatto.",
	},
	{
		question: "Il Ki Kai Dojo è affiliato a federazioni ufficiali?",
		answer: "Sì. Il Ki Kai Dojo ASD è affiliato a FIKTA (Federazione Italiana Karate Tradizionale e Arti Marziali Affini), FIJLKAM, AICS e Libertas. Questo garantisce la qualità dell'insegnamento, la validità delle cinture conseguite e la possibilità di partecipare a gare e tornei ufficiali a livello regionale e nazionale.",
	},
]
</script>

<style scoped>
.faq-expand-enter-active,
.faq-expand-leave-active {
	transition:
		max-height 0.3s ease,
		opacity 0.3s ease;
	max-height: 300px;
	overflow: hidden;
}

.faq-expand-enter-from,
.faq-expand-leave-to {
	max-height: 0;
	opacity: 0;
}
</style>
