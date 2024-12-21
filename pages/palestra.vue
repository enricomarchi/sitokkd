<template>
	<div class="overflow-x-hidden">
		<NavBar />
		<main>
			<!-- Sezione header con immagine di sfondo -->
			<div class="h-[40vh] relative">
				<div class="absolute inset-0 bg-black/50 z-10"></div>
				<img
					:src="dojoImages[0]"
					alt="Il nostro dojo"
					class="w-full h-full object-cover"
				/>
				<div
					class="absolute inset-0 z-20 flex items-center justify-center"
				>
					<h1
						class="text-4xl md:text-6xl text-white font-bold font-merienda"
					>
						La Nostra Palestra
					</h1>
				</div>
			</div>

			<!-- Contenuto principale -->
			<section class="py-20">
				<div class="container mx-auto px-4">
					<div class="grid md:grid-cols-2 gap-12 items-center">
						<div
							class="prose lg:prose-xl"
							v-motion
							:initial="{ opacity: 0, x: -100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<p>
								La nostra palestra di karate è un luogo dove la
								tradizione incontra il moderno. Con oltre 20
								anni di esperienza nell'insegnamento delle arti
								marziali, offriamo un ambiente accogliente e
								professionale per tutti gli appassionati.
							</p>
							<p>Il nostro dojo è equipaggiato con:</p>
							<ul>
								<li>Area tatami professionale di 200mq</li>
								<li>Spogliatoi moderni con docce</li>
								<li>
									Area riscaldamento e preparazione fisica
								</li>
								<li>Sala meditation</li>
							</ul>
						</div>

						<div
							class="grid grid-cols-2 gap-4"
							v-motion
							:initial="{ opacity: 0, x: 100 }"
							:visible="{ opacity: 1, x: 0 }"
						>
							<img
								v-for="(image, index) in dojoImages.slice(1)"
								:key="index"
								:src="image"
								:alt="`Immagine ${index + 1} del dojo`"
								class="rounded-lg shadow-lg w-full h-48 object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
		<FooterSection />
	</div>
</template>

<script setup>
const dojoImages = Object.values(
	import.meta.glob("/public/images/dojo/*.{jpg,jpeg,png,svg}", {
		eager: true,
		import: "default",
	})
)
</script>
