<template>
	<div>
		<NavBar :isHome="false" />
		<main class="bg-[#f5e6d3]">
			<!-- Staff Tecnico Principale -->
			<section
				class="container py-10 md:py-20 px-8 md:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1920px]"
			>
				<h1
					class="text-4xl md:text-6xl font-bold font-merienda text-center mb-16"
				>
					Gli istruttori
				</h1>
				<div
					class="flex flex-wrap justify-around gap-8 max-w-5xl mx-auto"
				>
					<!-- Maestro Card -->
					<div
						class="group bg-gradient-to-b from-[#f5e6d3] to-[#e6d5c3] rounded-2xl overflow-hidden shadow-2xl w-full md:w-[calc(50%-1rem)]"
					>
						<!-- Badge ruolo -->
						<div class="relative z-10 py-3 bg-red-600">
							<span
								class="text-base font-semibold text-white block text-center"
							>
								Maestro
							</span>
						</div>

						<!-- Contenitore immagine e informazioni -->
						<div class="relative aspect-[9/16] bg-[#f5e6d3]">
							<img
								:src="senseiMorenoImage"
								alt="Maestro Moreno Donà"
								class="absolute inset-0 w-full h-full object-contain"
							/>
							<!-- Overlay sempre visibile -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/50 transition-all duration-300"
							>
								<div
									class="absolute bottom-0 left-0 right-0 p-8"
								>
									<div
										class="transform transition-all duration-300 group-hover:scale-105"
									>
										<h2
											class="text-4xl font-bold mb-4 text-white"
										>
											Moreno Donà
										</h2>
										<p
											class="text-2xl font-light mb-6 text-red-500"
										>
											7° Dan
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Istruttrice Card -->
					<div
						class="group bg-gradient-to-b from-[#f5e6d3] to-[#e6d5c3] rounded-2xl overflow-hidden shadow-2xl w-full md:w-[calc(50%-1rem)]"
					>
						<!-- Badge ruolo -->
						<div class="relative z-10 py-3 bg-red-600">
							<span
								class="text-base font-semibold text-white block text-center"
							>
								Istruttrice
							</span>
						</div>

						<!-- Contenitore immagine e informazioni -->
						<div class="relative aspect-[9/16] bg-[#f5e6d3]">
							<img
								:src="senseiGioiaImage"
								alt="Istruttrice Gioia Donà"
								class="absolute inset-0 w-full h-full object-contain"
							/>
							<!-- Overlay sempre visibile -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/50 transition-all duration-300"
							>
								<div
									class="absolute bottom-0 left-0 right-0 p-8"
								>
									<div
										class="transform transition-all duration-300 group-hover:scale-105"
									>
										<h2
											class="text-4xl font-bold mb-4 text-white"
										>
											Gioia Donà
										</h2>
										<p
											class="text-2xl font-light mb-6 text-red-500"
										>
											3° Dan
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Staff di Supporto -->

				<h2 class="text-3xl font-bold text-center my-16 font-merienda">
					Staff Tecnico e Organizzativo
				</h2>

				<!-- Arbitri -->
				<div class="mb-16">
					<div class="max-w-4xl mx-auto">
						<div class="grid md:grid-cols-2 gap-8">
							<div
								v-for="arbitro in arbitriList"
								:key="arbitro.nome"
								class="group bg-gradient-to-b from-[#f5e6d3] to-[#e6d5c3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<!-- Badge ruolo sempre visibile -->
								<div class="relative z-10 py-2 bg-red-600">
									<span
										class="text-sm font-semibold text-white block text-center"
									>
										{{ arbitro.ruolo }}
									</span>
								</div>

								<!-- Contenitore immagine e informazioni -->
								<div class="aspect-[9/16] relative">
									<img
										:src="`/images/staff/${arbitro.foto}`"
										:alt="arbitro.nome"
										class="absolute inset-0 w-full h-full object-contain bg-[#f5e6d3]"
									/>
									<!-- Overlay con gradiente sempre visibile ma che si intensifica all'hover -->
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-300"
									>
										<div
											class="absolute bottom-0 left-0 right-0 p-6"
										>
											<div
												class="transform transition-all duration-300 group-hover:scale-105"
											>
												<h3
													class="text-xl font-bold mb-2 text-white"
												>
													{{ arbitro.nome }}
												</h3>
												<p class="text-gray-200">
													{{ arbitro.grado }}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Presidenti di Giuria -->
				<div>
					<div class="flex flex-wrap justify-center gap-8">
						<div
							v-for="presidente in presidentiList"
							:key="presidente.nome"
							class="group bg-gradient-to-b from-[#f5e6d3] to-[#e6d5c3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-[calc(33.333%-1.33rem)] max-w-sm"
						>
							<!-- Badge ruolo sempre visibile -->
							<div class="relative z-10 py-2 bg-red-600">
								<span
									class="text-sm font-semibold text-white block text-center"
								>
									{{ presidente.ruolo }}
								</span>
							</div>

							<!-- Contenitore immagine e informazioni -->
							<div class="relative aspect-[9/16]">
								<div
									class="absolute inset-0 w-full h-full object-contain bg-[#f5e6d3]"
								>
									<img
										:src="`/images/staff/${presidente.foto}`"
										:alt="presidente.nome"
										class="absolute inset-0 w-full h-full object-contain bg-[#f5e6d3]"
									/>
									<!-- Overlay con gradiente sempre visibile ma che si intensifica all'hover -->
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-300"
									>
										<div
											class="absolute bottom-0 left-0 right-0 p-6"
										>
											<div
												class="transform transition-all duration-300 group-hover:scale-105"
											>
												<h3
													class="text-xl font-bold mb-2 text-white"
												>
													{{ presidente.nome }}
												</h3>
												<p class="text-gray-200">
													{{ presidente.grado }}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
// Percorsi diretti per le foto dei sensei
const senseiMorenoImage = "/images/sensei/moreno.jpg"
const senseiGioiaImage = "/images/sensei/gioia.jpg"

const arbitri = [
	{ nome: "Valerio Candiotto", foto: "valerio.jpg", grado: "2° Dan" },
	{ nome: "Alessandro Sbeghen", foto: "alessandro.jpg", grado: "2° Dan" },
]

const presidenti = [
	{ nome: "Gioia Donà", foto: "gioia.jpg", grado: "3° Dan" },
	{ nome: "Manuela Orlando", foto: "manuela.jpg", grado: "1° Dan" },
	{ nome: "Silvia Poliak", foto: "silvia.jpg", grado: "1° Dan" },
	{ nome: "Giovanna Di Blasi", foto: "giovanna.jpg", grado: "1° Dan" },
	{ nome: "Enrico Marchi", foto: "enrico.jpg" },
]

const arbitriList = arbitri.map((a) => ({ ...a, ruolo: "Arbitro" }))
const presidentiList = presidenti
	.sort((a, b) => {
		if (a.nome === "Gioia Donà") return -1
		if (b.nome === "Gioia Donà") return 1
		const getGradeNumber = (grade) => {
			if (!grade) return -1
			const match = grade.match(/(\d+)°/)
			return match ? parseInt(match[1]) : -1
		}
		return getGradeNumber(b.grado) - getGradeNumber(a.grado)
	})
	.map((p) => ({ ...p, ruolo: "Presidente di Giuria" }))
</script>
