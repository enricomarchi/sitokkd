<template>
	<div class="min-h-screen bg-white">
		<div class="bg-ink-950 pt-32 pb-20">
			<div class="container mx-auto px-6 text-center">
				<NuxtLink
					to="/"
					class="inline-flex items-center gap-2 text-accent-400 text-sm mb-10 hover:text-accent-300 transition-colors"
				>
					<svg
						class="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Torna alla home
				</NuxtLink>
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Hai qualche dubbio?
				</p>
				<h1
					class="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
				>
					Domande Frequenti
				</h1>
				<div class="w-12 h-px bg-accent-500 mx-auto mb-6" />
				<p class="text-white/50 max-w-xl mx-auto leading-relaxed">
					Tutto quello che devi sapere prima di iniziare il tuo
					percorso nel karate a Treviso
				</p>
			</div>
		</div>

		<FaqSection />
	</div>
</template>

<script setup>
useHead({
	title: "FAQ – Domande Frequenti | Ki Kai Dojo Karate Carbonera",
	meta: [
		{
			name: "description",
			content:
				"Risposte alle domande più frequenti sul Ki Kai Dojo di Carbonera: corsi, età minima, costi, affiliazioni e come iscriversi ai corsi di karate a Treviso.",
		},
		{
			property: "og:title",
			content: "FAQ – Ki Kai Dojo Karate Carbonera",
		},
		{
			property: "og:description",
			content:
				"Risposte alle domande frequenti sui corsi di karate del Ki Kai Dojo a Carbonera, Treviso.",
		},
		{
			property: "og:url",
			content: "https://www.karatecarbonera.com/faq",
		},
	],
	link: [
		{ rel: "canonical", href: "https://www.karatecarbonera.com/faq" },
	],
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				"@id": "https://www.karatecarbonera.com/faq",
				mainEntity: [
					{
						"@type": "Question",
						name: "Dove si trovano i corsi di karate vicino a Treviso?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Il Ki Kai Dojo offre corsi di karate in tre sedi nel comune di Carbonera (TV), a pochi minuti da Treviso: la sede principale presso le Scuole Medie di Carbonera (Viale Brigata Marche), la sede di Saletto e la sede Tina Anselmi. Siamo facilmente raggiungibili da tutto il comune di Treviso e dai comuni limitrofi come Villorba, Paese, Casier e Dosson.",
						},
					},
					{
						"@type": "Question",
						name: "A che età i bambini possono iniziare il karate?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "I bambini possono iniziare il karate già a partire dai 4 anni. Il corso Tigrotti è pensato appositamente per i più piccoli (4-6 anni) con un approccio ludico-motorio. Dai 7 anni in poi ci sono i corsi per bambini principianti e cinture colorate.",
						},
					},
					{
						"@type": "Question",
						name: "Ci sono corsi di karate per adulti principianti a Treviso?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Sì, il Ki Kai Dojo propone corsi di karate per adulti principianti aperti a chiunque voglia avvicinarsi all'arte marziale, indipendentemente dall'età o dalla forma fisica. Gli adulti possono frequentare anche i corsi di difesa personale basati sul karate Shotokan. Non serve nessuna esperienza precedente.",
						},
					},
					{
						"@type": "Question",
						name: "La prima lezione di karate è gratuita?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Sì, la prima lezione è completamente gratuita e senza impegno. Puoi venire a provare, conoscere il Maestro Moreno Donà e i nostri istruttori, e capire se il karate fa per te o per il tuo bambino. Contattaci via WhatsApp o telefono per prenotare la tua lezione di prova.",
						},
					},
					{
						"@type": "Question",
						name: "Offrite corsi di difesa personale a Treviso?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Sì. Nella sede Tina Anselmi è attivo un corso di difesa personale basato sulle tecniche del karate Shotokan, aperto a uomini e donne. Il corso insegna come prevenire situazioni di pericolo e come reagire efficacemente in caso di necessità.",
						},
					},
					{
						"@type": "Question",
						name: "Il Ki Kai Dojo è affiliato a federazioni ufficiali di karate?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Sì. Il Ki Kai Dojo ASD è affiliato a FIKTA (Federazione Italiana Karate Tradizionale e Arti Marziali Affini), FIJLKAM, AICS e Libertas. Questo garantisce la qualità dell'insegnamento, la validità delle cinture conseguite e la possibilità di partecipare a gare ufficiali a livello regionale e nazionale.",
						},
					},
				],
			}),
		},
	],
})
</script>
