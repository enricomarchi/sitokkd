<template>
	<div class="overflow-x-hidden">
		<NavBar />
		<main>
			<HeroSection />
			<PhilosophySection />
			<AboutDojo />
			<Courses />
			<AboutMe />
			<RefereesSection />
			<SupportersSection />
			<FaqSection />
			<ContactSection />
		</main>
		<FooterSection />
		<ScrollToTop />
	</div>
</template>

<script setup>
useHead({
	title: "Scuola di Karate Shotokan a Carbonera (Treviso)",
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": ["SportsActivityLocation", "MartialArtsSchool", "LocalBusiness"],
						"@id": "https://www.karatecarbonera.com/#organization",
						name: "Ki Kai Dojo ASD – Scuola di Karate Shotokan",
						alternateName: "Ki Kai Dojo Karate Carbonera",
						url: "https://www.karatecarbonera.com",
						telephone: "+393495630438",
						email: "moreno@karatecarbonera.com",
						logo: "https://www.karatecarbonera.com/images/logo/logo.svg",
						image: "https://www.karatecarbonera.com/images/logo/logo.svg",
						description:
							"Ki Kai Dojo ASD è una scuola di Karate Shotokan a Carbonera (Treviso) fondata dal Maestro Moreno Donà, 7° Dan. Corsi per bambini dai 4 anni, ragazzi e adulti. Difesa personale, agonismo e avviamento al karate. Prima lezione gratuita.",
						sport: "Karate Shotokan",
						address: {
							"@type": "PostalAddress",
							streetAddress: "Viale Brigata Marche, 9",
							addressLocality: "Carbonera",
							addressRegion: "TV",
							postalCode: "31030",
							addressCountry: "IT",
						},
						geo: {
							"@type": "GeoCoordinates",
							latitude: 45.6669,
							longitude: 12.2789,
						},
						areaServed: [
							{ "@type": "City", name: "Carbonera" },
							{ "@type": "City", name: "Treviso" },
						],
						openingHoursSpecification: [
							{
								"@type": "OpeningHoursSpecification",
								dayOfWeek: ["Monday", "Wednesday"],
								opens: "17:00",
								closes: "19:00",
								description: "Sede Saletto",
							},
							{
								"@type": "OpeningHoursSpecification",
								dayOfWeek: ["Tuesday", "Friday"],
								opens: "17:00",
								closes: "22:00",
								description: "Sede Scuole Medie Carbonera",
							},
							{
								"@type": "OpeningHoursSpecification",
								dayOfWeek: "Thursday",
								opens: "17:00",
								closes: "18:00",
								description: "Sede Tina Anselmi",
							},
						],
						sameAs: [
							"https://www.facebook.com/kikaidojo",
							"https://www.instagram.com/kikaidojokaratecarbonera/",
						],
						founder: {
							"@id": "https://www.karatecarbonera.com/#moreno-dona",
						},
						employee: [
							{
								"@id": "https://www.karatecarbonera.com/#moreno-dona",
							},
							{
								"@id": "https://www.karatecarbonera.com/#gioia-dona",
							},
						],
						memberOf: [
							{ "@type": "Organization", name: "FIKTA – Federazione Italiana Karate Tradizionale e Arti Marziali Affini", url: "https://www.fikta.it/" },
							{ "@type": "Organization", name: "FIJLKAM", url: "https://www.fijlkam.it/" },
							{ "@type": "Organization", name: "AICS", url: "https://www.aics.it/" },
							{ "@type": "Organization", name: "Libertas", url: "https://www.libertasnazionale.it/" },
						],
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "Corsi di Karate",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Bambini Principianti",
										description: "Corso di avviamento al karate per bambini dai 4 ai 6 anni. Attività ludico-motoria, primi passi nel karate.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Bambini Cinture Colorate",
										description: "Corso per bambini con cinture colorate. Tecnica, kata e preparazione alle competizioni.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Ragazzi Agonisti",
										description: "Preparazione agonistica per ragazzi. Kata, kumite e partecipazione a gare regionali e nazionali.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Adulti Principianti",
										description: "Corso per adulti che si avvicinano al karate. Tecnica di base, forma fisica e autodisciplina.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Adulti Cinture Nere",
										description: "Allenamento avanzato per adulti con cintura nera e Dan. Perfezionamento tecnico e kata superiori.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Difesa Personale",
										description: "Corso di difesa personale basato sulle tecniche del karate Shotokan, aperto a tutti.",
									},
								},
							],
						},
					},
					{
						"@type": "Person",
						"@id": "https://www.karatecarbonera.com/#moreno-dona",
						name: "Moreno Donà",
						jobTitle: "Maestro di Karate – 7° Dan",
						description:
							"Fondatore del Ki Kai Dojo, il Maestro Moreno Donà ha oltre 30 anni di esperienza nell'insegnamento del Karate Shotokan. Ha formato più di 500 allievi e oltre 50 cinture nere.",
						knowsAbout: ["Karate Shotokan", "Arti Marziali", "Kata", "Kumite", "Difesa Personale"],
						worksFor: {
							"@id": "https://www.karatecarbonera.com/#organization",
						},
					},
					{
						"@type": "Person",
						"@id": "https://www.karatecarbonera.com/#gioia-dona",
						name: "Gioia Donà",
						jobTitle: "Istruttrice di Karate – Presidente di Giuria Nazionale FIKTA",
						description:
							"Istruttrice con particolare attenzione ai giovani atleti. Gioia è anche PDG Nazionale e membro della Commissione Nazionale PDG FIKTA.",
						knowsAbout: ["Karate Shotokan", "Arbitraggio Karate"],
						worksFor: {
							"@id": "https://www.karatecarbonera.com/#organization",
						},
					},
					{
						"@type": "FAQPage",
						mainEntity: [
							{
								"@type": "Question",
								name: "Dove si trova la scuola di karate Ki Kai Dojo a Carbonera?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "La sede principale del Ki Kai Dojo si trova presso le Scuole Medie di Carbonera, in Viale Brigata Marche 9, 31030 Carbonera (TV). Abbiamo anche sedi a Saletto (Via Sergente Davanzo 52) e presso la Scuola Primaria Tina Anselmi (Via IV Novembre 30, Carbonera).",
								},
							},
							{
								"@type": "Question",
								name: "A che età si può iniziare il karate?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Al Ki Kai Dojo accogliamo bambini a partire dai 4 anni con il corso Tigrotti, un programma di avviamento ludico-motorio al karate. I bambini più grandi possono accedere ai corsi di cinture colorate e, crescendo, ai corsi agonistici per ragazzi.",
								},
							},
							{
								"@type": "Question",
								name: "Quanto costa un corso di karate al Ki Kai Dojo?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Per conoscere le tariffe aggiornate ti invitiamo a contattarci direttamente via WhatsApp al 349 563 0438 o via email a moreno@karatecarbonera.com. La prima lezione di prova è sempre gratuita e senza impegno.",
								},
							},
							{
								"@type": "Question",
								name: "Che stile di karate insegnate?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Pratichiamo il Karate Shotokan tradizionale, lo stile fondato dal Maestro Gichin Funakoshi. Il nostro dojo è affiliato alla FIKTA (Federazione Italiana Karate Tradizionale), alla FIJLKAM, all'AICS e alla Libertas.",
								},
							},
							{
								"@type": "Question",
								name: "Quali sono gli orari dei corsi di karate a Carbonera?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Sede Scuole Medie Carbonera: martedì e venerdì 17:00–22:00. Sede Saletto: lunedì e mercoledì 17:00–19:00. Sede Tina Anselmi: giovedì 17:00–18:00. Per gli orari dettagliati di ogni singolo corso, contattaci.",
								},
							},
							{
								"@type": "Question",
								name: "Offrite corsi di difesa personale a Treviso?",
								acceptedAnswer: {
									"@type": "Answer",
								text: "Sì, offriamo un corso di difesa personale basato sul Krav Maga presso la sede Tina Anselmi a Carbonera, a pochi minuti da Treviso. Il corso è aperto a tutti, anche a chi non ha esperienza nelle arti marziali.",
								},
							},
						],
					},
				],
			}),
		},
	],
})
</script>
