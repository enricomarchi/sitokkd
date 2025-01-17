<template>
	<div class="overflow-x-hidden">
		<NavBar />
		<main>
			<!-- Header section -->
			<div class="h-[40vh] relative">
				<div class="absolute inset-0 bg-black/50 z-10"></div>
				<img
					src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
					alt="Le nostre palestre"
					class="w-full h-full object-cover"
				/>
				<div
					class="absolute inset-0 z-20 flex items-center justify-center"
				>
					<h1
						class="text-4xl md:text-6xl text-white font-bold font-merienda"
					>
						Le Nostre Sedi
					</h1>
				</div>
			</div>

			<!-- Sede di Carbonera -->
			<section class="py-20 bg-white">
				<div class="container mx-auto px-4">
					<h2
						class="text-3xl font-bold mb-12 text-center font-merienda"
					>
						Sede di Carbonera
					</h2>
					<div class="grid md:grid-cols-2 gap-12 items-center">
						<div
							class="prose lg:prose-xl"
							v-motion
							:initial="{ opacity: 0, x: -100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<p>
								La nostra sede principale si trova presso il
								Palazzetto dello Sport di Carbonera, una
								struttura moderna e polivalente nel cuore del
								comune. Il palazzetto, situato in una zona
								facilmente raggiungibile, offre ampi spazi per
								la pratica del karate in un ambiente
								professionale e confortevole.
							</p>
							<p>La struttura offre:</p>
							<ul>
								<li>Ampio tatami professionale</li>
								<li>Spogliatoi completi con docce</li>
								<li>Ampio parcheggio gratuito</li>
								<li>Tribuna per il pubblico</li>
								<li>Ambiente climatizzato</li>
							</ul>
							<p>
								Indirizzo: Via IV Novembre 30, 31030 Carbonera
								TV
							</p>
						</div>
						<div
							class="grid grid-cols-2 gap-4"
							v-motion
							:initial="{ opacity: 0, x: 100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<img
								v-for="i in 4"
								:key="i"
								:src="`https://picsum.photos/400/300?random=${i}`"
								:alt="`Palestra Carbonera ${i}`"
								class="rounded-lg shadow-lg w-full h-48 object-cover"
							/>
						</div>
					</div>
					<!-- Galleria Carbonera -->
					<div class="mt-16">
						<h3 class="text-2xl font-bold mb-8 text-center">
							Galleria Fotografica
						</h3>
						<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div
								v-for="(img, index) in carboneraPics"
								:key="index"
								@click="openModal(carboneraPics, index)"
								class="cursor-pointer transform hover:scale-105 transition-transform"
							>
								<img
									:src="img"
									:alt="`Palestra Carbonera ${index + 1}`"
									class="w-full h-48 object-cover rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Sede di Saletto di Piave -->
			<section class="py-20 bg-gray-50">
				<div class="container mx-auto px-4">
					<h2
						class="text-3xl font-bold mb-12 text-center font-merienda"
					>
						Sede di Saletto di Piave
					</h2>
					<div class="grid md:grid-cols-2 gap-12 items-center">
						<div
							class="prose lg:prose-xl order-2 md:order-1"
							v-motion
							:initial="{ opacity: 0, x: -100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<p>
								La nostra sede di Saletto di Piave si trova
								presso la Palestra Comunale, una struttura
								polivalente vicina al centro del paese. La
								palestra, recentemente ristrutturata, è parte
								del complesso scolastico e offre un ambiente
								ideale per la pratica del karate.
							</p>
							<p>La struttura dispone di:</p>
							<ul>
								<li>Ampia area per il tatami</li>
								<li>Spogliatoi rinnovati</li>
								<li>Parcheggio dedicato</li>
								<li>Accesso facilitato per disabili</li>
								<li>Illuminazione ottimizzata</li>
							</ul>
							<p>
								Indirizzo: Via San Pio X, Saletto di Piave,
								31030 Breda di Piave TV
							</p>
						</div>
						<div
							class="grid grid-cols-2 gap-4 order-1 md:order-2"
							v-motion
							:initial="{ opacity: 0, x: 100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<img
								v-for="i in 4"
								:key="i"
								:src="`https://picsum.photos/400/300?random=${
									i + 4
								}`"
								:alt="`Palestra Saletto ${i}`"
								class="rounded-lg shadow-lg w-full h-48 object-cover"
							/>
						</div>
					</div>
					<!-- Galleria Saletto -->
					<div class="mt-16">
						<h3 class="text-2xl font-bold mb-8 text-center">
							Galleria Fotografica
						</h3>
						<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div
								v-for="(img, index) in salettoPics"
								:key="index"
								@click="openModal(salettoPics, index)"
								class="cursor-pointer transform hover:scale-105 transition-transform"
							>
								<img
									:src="img"
									:alt="`Palestra Saletto ${index + 1}`"
									class="w-full h-48 object-cover rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Modal per visualizzazione immagini -->
			<div
				v-if="showModal"
				class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
				@click="closeModal"
			>
				<div
					class="relative w-full h-full flex items-center justify-center"
				>
					<button
						@click="prevImage"
						class="absolute left-4 text-white text-4xl hover:text-gray-300"
					>
						&#8249;
					</button>
					<img
						:src="currentModalImage"
						class="max-h-[90vh] max-w-[90vw] object-contain"
						:alt="`Immagine ${currentImageIndex + 1}`"
					/>
					<button
						@click="nextImage"
						class="absolute right-4 text-white text-4xl hover:text-gray-300"
					>
						&#8250;
					</button>
				</div>
			</div>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
const { getImagesFromFolder } = useGalleryImages()

const carboneraPics = getImagesFromFolder("carbonera")
const salettoPics = getImagesFromFolder("saletto")

const showModal = ref(false)
const currentImages = ref([])
const currentImageIndex = ref(0)
const currentModalImage = computed(
	() => currentImages.value[currentImageIndex.value]
)

const openModal = (images, index) => {
	currentImages.value = images
	currentImageIndex.value = index
	showModal.value = true
}

const closeModal = () => {
	showModal.value = false
}

const nextImage = (e) => {
	e.stopPropagation()
	currentImageIndex.value =
		(currentImageIndex.value + 1) % currentImages.value.length
}

const prevImage = (e) => {
	e.stopPropagation()
	currentImageIndex.value =
		currentImageIndex.value === 0
			? currentImages.value.length - 1
			: currentImageIndex.value - 1
}
</script>
