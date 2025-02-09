<template>
	<div class="overflow-x-hidden">
		<NavBar />
		<main>
			<!-- Sede di Carbonera -->
			<section
				class="py-20 bg-cover bg-center bg-no-repeat relative"
				style="
					background-image: url('/images/sfondi-sezioni/sezione-1.jpg');
				"
			>
				<!-- Overlay scuro -->
				<div class="absolute inset-0 bg-black/60"></div>

				<div class="container mx-auto px-4 relative z-10">
					<h1
						class="text-4xl md:text-6xl font-bold font-merienda text-center text-white mb-16"
					>
						Le Nostre Sedi
					</h1>
					<h2
						class="text-3xl font-bold mb-12 text-center font-merienda text-white"
					>
						Sede di Carbonera
					</h2>
					<div class="grid md:grid-cols-12 gap-12 items-start">
						<div
							class="md:col-span-4"
							v-motion
							:initial="{ opacity: 0, x: -100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<div
								class="bg-black/50 rounded-xl p-6 h-full space-y-8"
							>
								<div>
									<p class="text-lg text-gray-300">
										La nostra sede principale si trova
										presso il Palazzetto dello Sport di
										Carbonera, una struttura moderna e
										polivalente nel cuore del comune. Il
										palazzetto, situato in una zona
										facilmente raggiungibile, offre ampi
										spazi per la pratica del karate in un
										ambiente professionale e confortevole.
									</p>
								</div>

								<div>
									<h3
										class="text-xl font-merienda text-red-400 mb-2"
									>
										La struttura offre:
									</h3>
									<ul class="space-y-4">
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Ampio area per il tatami
											</span>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Spogliatoi completi con
												docce</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Ampio parcheggio gratuito</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Tribuna per il pubblico</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Ambiente climatizzato</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Pavimento in parquet
												riscaldato</span
											>
										</li>
									</ul>
								</div>

								<div>
									<p class="text-gray-400">
										Indirizzo: Via IV Novembre 30, 31030
										Carbonera TV
									</p>
								</div>
							</div>
						</div>
						<div
							class="md:col-span-8 grid grid-cols-2 gap-4"
							v-motion
							:initial="{ opacity: 0, x: 100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<img
								v-for="img in carboneraImages"
								:key="img"
								:src="img"
								:alt="'Palestra Carbonera'"
								class="rounded-lg shadow-lg w-full h-48 object-cover cursor-pointer transition-all duration-300 hover:opacity-75 hover:scale-105 hover:shadow-xl"
								@click="openImage(img, 'Palestra Carbonera')"
							/>
						</div>
					</div>
				</div>
			</section>

			<!-- Sede di Saletto di Piave -->
			<section
				class="py-20 bg-cover bg-center bg-no-repeat relative"
				style="
					background-image: url('/images/sfondi-sezioni/sezione-1.jpg');
				"
			>
				<!-- Overlay scuro -->
				<div class="absolute inset-0 bg-black/60"></div>

				<div class="container mx-auto px-4 relative z-10">
					<h2
						class="text-3xl font-bold mb-12 text-center font-merienda text-white"
					>
						Sede di Saletto di Piave
					</h2>
					<div class="grid md:grid-cols-12 gap-12 items-start">
						<div
							class="md:col-span-8 grid grid-cols-2 gap-4 order-1"
							v-motion
							:initial="{ opacity: 0, x: -100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<img
								v-for="img in salettoImages"
								:key="img"
								:src="img"
								:alt="'Palestra Saletto'"
								class="rounded-lg shadow-lg w-full h-48 object-cover cursor-pointer transition-all duration-300 hover:opacity-75 hover:scale-105 hover:shadow-xl"
								@click="openImage(img, 'Palestra Saletto')"
							/>
						</div>
						<div
							class="md:col-span-4 order-2"
							v-motion
							:initial="{ opacity: 0, x: 100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<div
								class="bg-black/50 rounded-xl p-6 h-full space-y-8"
							>
								<div>
									<p class="text-lg text-gray-300">
										La nostra sede di Saletto di Piave si
										trova presso la Palestra Comunale, una
										struttura polivalente vicina al centro
										del paese. La palestra, recentemente
										ristrutturata, è parte del complesso
										scolastico e offre un ambiente ideale
										per la pratica del karate.
									</p>
								</div>

								<div>
									<h3
										class="text-xl font-merienda text-red-400 mb-2"
									>
										La struttura dispone di:
									</h3>
									<ul class="space-y-4">
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Ampia area per il tatami</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Spogliatoi completi con
												docce</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Tribuna per il pubblico</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Ambiente climatizzato</span
											>
										</li>
										<li class="flex items-center space-x-2">
											<span class="text-red-400 text-lg"
												>•</span
											>
											<span class="text-gray-300"
												>Pavimento in parquet
												riscaldato</span
											>
										</li>
									</ul>
								</div>

								<div>
									<p class="text-gray-400">
										Indirizzo: Via San Pio X, Saletto di
										Piave, 31030 Breda di Piave TV
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ImageModal
				:is-open="isModalOpen"
				:image-src="selectedImage"
				:image-alt="selectedImageAlt"
				@close="closeImage"
			/>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
const { getImagesFromFolder } = useGalleryImages()

const carboneraImages = getImagesFromFolder("palestra/carbonera")
const salettoImages = getImagesFromFolder("palestra/saletto")

// Debug migliorato
console.log("=== Debug Immagini ===")
console.log("Carbonera:", carboneraImages)
console.log("Saletto:", salettoImages)

// Verifica se le immagini sono state caricate
onMounted(() => {
	console.log("Component mounted")
	console.log("Numero immagini Carbonera:", carboneraImages.length)
	console.log("Numero immagini Saletto:", salettoImages.length)
})

// Gestione modal
const isModalOpen = ref(false)
const selectedImage = ref("")
const selectedImageAlt = ref("")

const openImage = (src, alt) => {
	selectedImage.value = src
	selectedImageAlt.value = alt
	isModalOpen.value = true
}

const closeImage = () => {
	isModalOpen.value = false
	selectedImage.value = ""
	selectedImageAlt.value = ""
}
</script>

<style></style>
