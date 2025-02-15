<template>
	<div class="overflow-x-hidden">
		<NavBar />
		<main>
			<!-- Sede di Carbonera -->
			<div class="bg-[#f5e6d3]">
				<div
					class="px-8 md:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1920px]"
				>
					<section class="py-20">
						<div class="container mx-auto">
							<h1
								class="text-4xl md:text-6xl font-bold font-merienda text-center mb-16"
							>
								Le Nostre Sedi
							</h1>
							<h2
								class="text-3xl font-bold mb-12 text-center font-merienda text-red-600"
							>
								Sede di Carbonera
							</h2>
							<div
								class="grid md:grid-cols-12 gap-12 items-start"
							>
								<div
									class="md:col-span-4"
									v-motion
									:initial="{ opacity: 0, x: -100 }"
									:visible="{ opacity: 1, x: 0 }"
								>
									<div
										class="rounded-xl p-6 h-full space-y-8"
									>
										<div>
											<p class="text-lg text-gray-700">
												La nostra sede principale si
												trova presso il Palazzetto dello
												Sport di Carbonera, una
												struttura moderna e polivalente
												nel cuore del comune. Il
												palazzetto, situato in una zona
												facilmente raggiungibile, offre
												ampi spazi per la pratica del
												karate in un ambiente
												professionale e confortevole.
											</p>
										</div>

										<div>
											<h3
												class="text-xl font-merienda text-red-600 mb-2"
											>
												La struttura offre:
											</h3>
											<ul class="space-y-4 ki-kai-list">
												<li class="text-gray-700">
													Ampia area per il tatami
												</li>
												<li class="text-gray-700">
													Spogliatoi completi con
													docce
												</li>
												<li class="text-gray-700">
													Ampio parcheggio gratuito
												</li>
												<li class="text-gray-700">
													Tribuna per il pubblico
												</li>
												<li class="text-gray-700">
													Ambiente climatizzato
												</li>
												<li class="text-gray-700">
													Pavimento in parquet
													riscaldato
												</li>
											</ul>
										</div>

										<div>
											<span
												class="font-semibold text-gray-700"
											>
												Via IV Novembre 30, 31030
												Carbonera TV
											</span>
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
										@click="
											openImage(img, 'Palestra Carbonera')
										"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Sede di Saletto di Piave -->
			<div class="bg-[#e6d5c3]">
				<div
					class="px-8 md:px-12 lg:px-16 xl:px-24 mx-auto max-w-[1920px]"
				>
					<section class="py-20">
						<div class="container mx-auto">
							<h2
								class="text-3xl font-bold mb-12 text-center font-merienda text-red-600"
							>
								Sede di Saletto di Piave
							</h2>
							<div
								class="grid md:grid-cols-12 gap-12 items-start"
							>
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
										@click="
											openImage(img, 'Palestra Saletto')
										"
									/>
								</div>
								<div
									class="md:col-span-4 order-2"
									v-motion
									:initial="{ opacity: 0, x: 100 }"
									:visible="{ opacity: 1, x: 0 }"
								>
									<div
										class="rounded-xl p-6 h-full space-y-8"
									>
										<div>
											<p class="text-lg text-gray-700">
												La nostra sede di Saletto di
												Piave si trova presso la
												Palestra Comunale, una struttura
												polivalente vicina al centro del
												paese. La palestra, recentemente
												ristrutturata, è parte del
												complesso scolastico e offre un
												ambiente ideale per la pratica
												del karate.
											</p>
										</div>

										<div>
											<h3
												class="text-xl font-merienda text-red-600 mb-2"
											>
												La struttura dispone di:
											</h3>
											<ul class="space-y-4 ki-kai-list">
												<li class="text-gray-700">
													Ampia area per il tatami
												</li>
												<li class="text-gray-700">
													Spogliatoi completi con
													docce
												</li>
												<li class="text-gray-700">
													Tribuna per il pubblico
												</li>
												<li class="text-gray-700">
													Ambiente climatizzato
												</li>
												<li class="text-gray-700">
													Pavimento in parquet
													riscaldato
												</li>
											</ul>
										</div>

										<div>
											<span
												class="font-semibold text-gray-700"
											>
												Via San Pio X, Saletto di Piave,
												31030 Breda di Piave TV
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
		<FooterSection />

		<!-- Image Modal -->
		<div
			v-if="isModalOpen"
			class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
			@click="closeImage"
		>
			<div
				class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
			>
				<img
					:src="selectedImage"
					:alt="selectedImageAlt"
					class="max-w-full max-h-[90vh] object-contain rounded-lg"
					@click.stop
				/>
				<button
					@click.stop="closeImage"
					class="absolute top-2 right-2 text-white hover:text-gray-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const { getImagesFromFolder } = useGalleryImages()

const carboneraImages = getImagesFromFolder("palestra/carbonera")
const salettoImages = getImagesFromFolder("palestra/saletto")

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
