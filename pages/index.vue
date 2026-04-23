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
				],
			}),
		},
	],
})
</script>
