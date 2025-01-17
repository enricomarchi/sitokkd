<template>
	<div>
		<NavBar :isHome="false" />
		<main>
			<!-- Hero Section -->
			<section class="relative bg-black text-white py-32">
				<div class="absolute inset-0 z-0">
					<img
						src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=2900"
						alt="Karate Background"
						class="w-full h-full object-cover opacity-40"
					/>
					<!-- Aggiungi overlay gradient -->
					<div
						class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"
					></div>
				</div>
				<div class="relative z-10 container mx-auto px-4 text-center">
					<h1 class="text-5xl font-bold mb-6 font-merienda">
						Lo Staff
					</h1>
					<p class="max-w-2xl mx-auto text-lg text-gray-300">
						Il Ki Kai Dojo si avvale di uno staff tecnico altamente
						qualificato, composto da Maestri, Istruttori, Arbitri e
						Presidenti di Giuria Federali, tutti regolarmente
						riconosciuti dalla FIKTA.
					</p>
				</div>
			</section>

			<div class="relative">
				<!-- Decorative Elements -->
				<div
					class="absolute inset-0 pointer-events-none overflow-hidden"
				>
					<!-- Temporaneamente, usiamo un emoji come decorazione -->
					<div
						class="absolute top-20 -right-20 w-64 opacity-5 text-9xl"
					>
						気
					</div>
					<div
						class="absolute bottom-20 -left-20 w-64 opacity-5 text-9xl transform rotate-180"
					>
						道
					</div>
				</div>

				<!-- Sezione Istruttori -->
				<section class="py-20">
					<div class="container mx-auto px-4">
						<h2
							class="text-4xl font-bold text-center mb-6 font-merienda"
						>
							I Nostri Istruttori
						</h2>
						<p
							class="text-gray-600 text-center max-w-3xl mx-auto mb-16"
						>
							Gli istruttori del Ki Kai Dojo garantiscono un
							percorso formativo completo per tutti i livelli, dal
							principiante all'agonista.
						</p>

						<div class="grid md:grid-cols-2 gap-16">
							<!-- Maestro Moreno -->
							<div
								class="group relative overflow-hidden rounded-xl bg-white shadow-xl"
							>
								<div class="relative h-[500px]">
									<img
										:src="senseiMorenoImage"
										alt="Maestro Moreno Donà"
										class="absolute inset-0 h-full w-full object-cover"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
									></div>
									<div
										class="absolute bottom-0 p-8 text-white"
									>
										<h3 class="text-3xl font-bold mb-2">
											Maestro Moreno Donà
										</h3>
										<p class="text-lg mb-4">6° Dan</p>
										<div class="space-y-2 text-gray-200">
											<p>• Maestro di Karate dal 1990</p>
											<p>
												• Direttore Tecnico del Ki Kai
												Dojo
											</p>
											<p>• Istruttore Federale FIKTA</p>
										</div>
									</div>
								</div>
							</div>

							<!-- Istruttrice Gioia -->
							<div
								class="group relative overflow-hidden rounded-xl bg-white shadow-xl"
							>
								<div class="relative h-[500px]">
									<img
										:src="senseiGioiaImage"
										alt="Istruttrice Gioia Donà"
										class="absolute inset-0 h-full w-full object-cover"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
									></div>
									<div
										class="absolute bottom-0 p-8 text-white"
									>
										<h3 class="text-3xl font-bold mb-2">
											Gioia Donà
										</h3>
										<p class="text-lg mb-4">3° Dan</p>
										<div class="space-y-2 text-gray-200">
											<p>• Istruttrice di Karate</p>
											<p>
												• Presidente di Giuria Federale
												FIKTA
											</p>
											<p>
												• Responsabile settore giovanile
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- Sezione Arbitri -->
				<section class="py-20 bg-gray-50">
					<div class="container mx-auto px-4">
						<h2
							class="text-4xl font-bold text-center mb-6 font-merienda"
						>
							I Nostri Arbitri
						</h2>
						<p
							class="text-gray-600 text-center max-w-3xl mx-auto mb-12"
						>
							Arbitri Federali con esperienza nazionale e
							internazionale, garantiscono la qualità tecnica
							delle competizioni.
						</p>
						<div class="grid md:grid-cols-2 gap-8">
							<div
								v-for="arbitro in arbitri"
								:key="arbitro.nome"
								class="bg-white p-6 rounded-lg shadow-md text-center"
							>
								<img
									:src="getStaffImage(arbitro.foto)"
									:alt="arbitro.nome"
									class="w-48 h-48 object-cover rounded-full mx-auto mb-4"
								/>
								<h3 class="text-xl font-bold mb-2">
									{{ arbitro.nome }}
								</h3>
								<p class="text-gray-600 mb-1">
									Arbitro Federale
								</p>
								<p class="text-gray-600">{{ arbitro.grado }}</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Sezione Presidenti di Giuria -->
				<section class="py-20">
					<div class="container mx-auto px-4">
						<h2
							class="text-4xl font-bold text-center mb-6 font-merienda"
						>
							Presidenti di Giuria
						</h2>
						<p
							class="text-gray-600 text-center max-w-3xl mx-auto mb-12"
						>
							I nostri Presidenti di Giuria Federali assicurano la
							corretta gestione delle competizioni e degli eventi
							sportivi.
						</p>
						<div class="grid md:grid-cols-3 gap-8">
							<div
								v-for="presidente in presidenti"
								:key="presidente.nome"
								class="bg-white p-6 rounded-lg shadow-md text-center"
							>
								<img
									:src="getStaffImage(presidente.foto)"
									:alt="presidente.nome"
									class="w-40 h-40 object-cover rounded-full mx-auto mb-4"
								/>
								<h3 class="text-xl font-bold mb-2">
									{{ presidente.nome }}
								</h3>
								<p class="text-gray-600 mb-1">
									Presidente di Giuria Federale
								</p>
								<p class="text-gray-600">
									{{ presidente.grado }}
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
const senseiImages = import.meta.glob(
	"/public/images/sensei/*.{jpg,jpeg,png,svg}",
	{
		eager: true,
		import: "default",
	}
)

// Ordina le immagini dei sensei per nome file
const orderedSenseiImages = Object.entries(senseiImages)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([_, value]) => value)

const senseiMorenoImage =
	orderedSenseiImages[0] ||
	"https://placehold.co/800x800/black/white?text=Maestro+Moreno"
const senseiGioiaImage =
	orderedSenseiImages[1] ||
	"https://placehold.co/800x800/black/white?text=Istruttrice+Gioia"

const staffImages = import.meta.glob(
	"/public/images/staff/*.{jpg,jpeg,png,svg}",
	{
		eager: true,
		import: "default",
	}
)

const getStaffImage = (filename) => {
	// Verifica se esiste un'immagine reale nella cartella staff
	const staffImage = Object.entries(staffImages).find(([path]) =>
		path.includes(filename)
	)?.[1]

	if (staffImage) {
		return staffImage
	}

	// Altrimenti usa un'immagine generica in base al genere
	const gender = {
		"valerio.jpg": "male",
		"alessandro.jpg": "male",
		"enrico.jpg": "male",
		"gioia.jpg": "female",
		"manuela.jpg": "female",
		"silvia.jpg": "female",
		"marzia.jpg": "female",
		"giovanna.jpg": "female",
	}

	const randomId = {
		"valerio.jpg": "45",
		"alessandro.jpg": "46",
		"gioia.jpg": "31",
		"manuela.jpg": "32",
		"silvia.jpg": "33",
		"marzia.jpg": "34",
		"giovanna.jpg": "35",
		"enrico.jpg": "47",
	}

	return `https://xsgames.co/randomusers/assets/avatars/${gender[filename]}/${randomId[filename]}.jpg`
}

const arbitri = [
	{ nome: "Valerio Candiotto", foto: "valerio.jpg", grado: "2° Dan" },
	{ nome: "Alessandro Sbeghen", foto: "alessandro.jpg", grado: "2° Dan" },
]

const presidenti = [
	{ nome: "Gioia Donà", foto: "gioia.jpg", grado: "3° Dan" },
	{ nome: "Marzia Moro", foto: "marzia.jpg", grado: "2° Dan" },
	{ nome: "Manuela Orlando", foto: "manuela.jpg", grado: "1° Dan" },
	{ nome: "Silvia Poliak", foto: "silvia.jpg", grado: "1° Dan" },
	{ nome: "Giovanna Di Blasi", foto: "giovanna.jpg", grado: "1° Dan" },
	{ nome: "Enrico Marchi", foto: "enrico.jpg", grado: "" },
]
</script>
