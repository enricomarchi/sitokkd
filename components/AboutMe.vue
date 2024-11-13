<template>
	<section id="about-me" class="py-20">
		<div class="container mx-auto px-4">
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div
					class="order-2 md:order-1"
					v-motion
					:initial="{ opacity: 0, x: -100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<img
						:src="senseiImage"
						alt="Il Maestro"
						class="rounded-lg shadow-xl w-full h-[600px] object-cover object-top"
					/>
				</div>
				<div
					class="order-1 md:order-2"
					v-motion
					:initial="{ opacity: 0, x: 100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<h2 class="text-4xl font-bold mb-6">
						Il Maestro Moreno Donà
					</h2>
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

const senseiImage = Object.values(senseiImages)[0]
</script>
