<template>
	<section id="about-me" class="py-20">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center mb-12">
				I Nostri Istruttori
			</h2>

			<!-- Maestro Moreno -->
			<div class="grid md:grid-cols-2 gap-12 items-center mb-20">
				<div
					class="order-2 md:order-1"
					v-motion
					:initial="{ opacity: 0, x: -100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<img
						:src="senseiMorenoImage"
						alt="Il Maestro Moreno Donà"
						class="rounded-lg shadow-xl w-full h-[600px] object-cover object-top"
					/>
				</div>
				<div
					class="order-1 md:order-2"
					v-motion
					:initial="{ opacity: 0, x: 100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<h3 class="text-3xl font-bold mb-6">
						Il Maestro Moreno Donà
					</h3>
					<div class="prose lg:prose-xl">
						<p>
							Con oltre 30 anni di esperienza nelle arti marziali
							e cintura nera 7° Dan, ho dedicato la mia vita
							all'insegnamento del karate e dei suoi valori.
						</p>
						<p>Il mio percorso include:</p>
						<ul>
							<li>Campione nazionale per 5 anni consecutivi</li>
							<li>
								Istruttore certificato dalla Federazione
								Italiana Karate
							</li>
							<li>
								Formazione diretta in Giappone con i migliori
								maestri
							</li>
							<li>
								Specializzazione in karate tradizionale e
								moderno
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Istruttrice Gioia -->
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div
					class="order-2"
					v-motion
					:initial="{ opacity: 0, x: 100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<img
						:src="senseiGioiaImage"
						alt="L'Istruttrice Gioia Donà"
						class="rounded-lg shadow-xl w-full h-[600px] object-cover object-top"
					/>
				</div>
				<div
					class="order-1"
					v-motion
					:initial="{ opacity: 0, x: -100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<h3 class="text-3xl font-bold mb-6">Gioia Donà</h3>
					<div class="prose lg:prose-xl">
						<p>
							Istruttrice qualificata e appassionata di karate,
							Gioia porta energia e dedizione nell'insegnamento
							delle arti marziali.
						</p>
						<p>Le sue qualifiche includono:</p>
						<ul>
							<li>Cintura nera e istruttrice certificata</li>
							<li>
								Specializzazione nell'insegnamento ai giovani
								atleti
							</li>
							<li>Esperienza nelle competizioni nazionali</li>
							<li>
								Formazione continua nelle tecniche moderne di
								insegnamento
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const senseiImages = import.meta.glob(
	"/public/images/sensei/*.{jpg,jpeg,png,svg}",
	{
		eager: true,
		import: "default",
	}
)

const senseiMorenoImage = Object.values(senseiImages)[0]
const senseiGioiaImage = Object.values(senseiImages)[1] || senseiMorenoImage // Fallback to Moreno's image if Gioia's is not available
</script>
