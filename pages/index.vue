<template>
	<div class="overflow-x-hidden">
		<NavBar />
		<main id="main-content" tabindex="-1">
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
		<SeoSection />
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
						"@type": [
							"SportsActivityLocation",
							"MartialArtsSchool",
							"SportsClub",
							"LocalBusiness",
						],
						"@id": "https://www.karatecarbonera.com/#organization",
						name: "Ki Kai Dojo ASD – Scuola di Karate Shotokan",
						alternateName: "Ki Kai Dojo Karate Carbonera",
						foundingDate: "1982",
						url: "https://www.karatecarbonera.com",
						telephone: "+393495630438",
						email: "moreno@karatecarbonera.com",
						logo: "https://www.karatecarbonera.com/images/logo/logo.svg",
						image: "https://www.karatecarbonera.com/images/logo/logo.svg",
						description:
							"Ki Kai Dojo ASD è una scuola di Karate Shotokan a Carbonera (Treviso) fondata dal Maestro Moreno Donà. Corsi per bambini dai 4 anni, ragazzi e adulti. Difesa personale, agonismo e avviamento al karate. Prima lezione gratuita.",
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
							{ "@type": "City", name: "Lancenigo" },
							{ "@type": "City", name: "Pezzan" },
							{ "@type": "City", name: "Vacil" },
							{ "@type": "City", name: "Vascon" },
							{ "@type": "City", name: "Varago" },
							{ "@type": "City", name: "Maserada sul Piave" },
							{ "@type": "City", name: "Breda di Piave" },
							{ "@type": "City", name: "Candelu" },
							{ "@type": "City", name: "Pero" },
							{ "@type": "City", name: "Cavrié" },
							{ "@type": "City", name: "Olmi" },
							{ "@type": "City", name: "San Biagio di Callalta" },
							{ "@type": "City", name: "Fagarè della Battaglia" },
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
							{
								"@type": "Organization",
								name: "FIKTA – Federazione Italiana Karate Tradizionale e Arti Marziali Affini",
								url: "https://www.fikta.it/",
							},
							{
								"@type": "Organization",
								name: "FIJLKAM",
								url: "https://www.fijlkam.it/",
							},
							{
								"@type": "Organization",
								name: "AICS",
								url: "https://www.aics.it/",
							},
							{
								"@type": "Organization",
								name: "Libertas",
								url: "https://www.libertasnazionale.it/",
							},
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
										description:
											"Corso di avviamento al karate per bambini dai 4 ai 6 anni. Attività ludico-motoria, primi passi nel karate.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Bambini Cinture Colorate",
										description:
											"Corso per bambini con cinture colorate. Tecnica, kata e preparazione alle competizioni.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Ragazzi Agonisti",
										description:
											"Preparazione agonistica per ragazzi. Kata, kumite e partecipazione a gare regionali e nazionali.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Adulti Principianti",
										description:
											"Corso per adulti che si avvicinano al karate. Tecnica di base, forma fisica e autodisciplina.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Karate Adulti Cinture Nere",
										description:
											"Allenamento avanzato per adulti con cintura nera e Dan. Perfezionamento tecnico e kata superiori.",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Course",
										name: "Difesa Personale",
										description:
											"Corso di difesa personale basato sulle tecniche del karate Shotokan, aperto a tutti.",
									},
								},
							],
						},
					},
					{
						"@type": "Person",
						"@id": "https://www.karatecarbonera.com/#moreno-dona",
						name: "Moreno Donà",
						honorificSuffix: "6° Dan",
						jobTitle: "Maestro di Karate Shotokan – 6° Dan",
						description:
							"Fondatore del Ki Kai Dojo, il Maestro Moreno Donà è cintura nera 6° Dan e istruttore qualificato con una lunga esperienza nell'insegnamento del Karate Shotokan. Ha formato numerosi allievi e molte cinture nere.",
						knowsAbout: [
							"Karate Shotokan",
							"Arti Marziali",
							"Kata",
							"Kumite",
							"Difesa Personale",
						],
						worksFor: {
							"@id": "https://www.karatecarbonera.com/#organization",
						},
					},
					{
						"@type": "Person",
						"@id": "https://www.karatecarbonera.com/#gioia-dona",
						name: "Gioia Donà",
						jobTitle:
							"Istruttrice di Karate – Presidente di Giuria Nazionale FIKTA",
						description:
							"Istruttrice con particolare attenzione ai giovani atleti. Gioia è anche PDG Nazionale e membro della Commissione Nazionale PDG FIKTA.",
						knowsAbout: ["Karate Shotokan", "Arbitraggio Karate"],
						worksFor: {
							"@id": "https://www.karatecarbonera.com/#organization",
						},
					},
					{
						"@type": "WebSite",
						"@id": "https://www.karatecarbonera.com/#website",
						url: "https://www.karatecarbonera.com",
						name: "Ki Kai Dojo – Karate Carbonera Treviso",
						description:
							"Scuola di Karate Shotokan a Carbonera (Treviso). Corsi per bambini, ragazzi e adulti. Prima lezione gratuita.",
						inLanguage: "it-IT",
						publisher: {
							"@id": "https://www.karatecarbonera.com/#organization",
						},
					},
					{
						"@type": "FAQPage",
						"@id": "https://www.karatecarbonera.com/#faq",
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
					},
				],
			}),
		},
	],
})
</script>
