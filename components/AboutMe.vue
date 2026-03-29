<template>
	<section id="instructors" class="py-24 md:py-32 bg-ink-900">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-400 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Chi siamo
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
				>
					I Nostri Istruttori
				</h2>
				<div class="w-12 h-px bg-white/20 mx-auto mb-6" />
				<p class="text-white/50 leading-relaxed">
					Passione, dedizione e un approccio che mette l'allievo al
					centro
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
				<!-- Moreno -->
				<div
					class="group"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div class="overflow-hidden mb-6">
						<img
							:src="senseiMorenoImage"
							alt="Maestro Moreno Donà"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
						/>
					</div>
					<p
						class="text-accent-400 text-xs uppercase tracking-[0.2em] mb-1"
					>
						Fondatore &amp; Maestro
					</p>
					<h3 class="text-2xl font-heading font-bold text-white mb-4">
						Moreno Donà
					</h3>
					<p class="text-white/50 text-sm leading-relaxed">
						Fondatore del Ki Kai Dojo, il Maestro Moreno ha dedicato
						la sua vita all'insegnamento del karate. Il suo
						approccio unisce il rigore della tradizione giapponese
						alla capacità di adattare l'insegnamento a ogni allievo,
						trasmettendo non solo la tecnica ma soprattutto i valori
						dell'arte marziale.
					</p>
				</div>

				<!-- Gioia -->
				<div
					class="group"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div class="overflow-hidden mb-6">
						<img
							:src="senseiGioiaImage"
							alt="Istruttrice Gioia Donà"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
						/>
					</div>
					<p
						class="text-accent-400 text-xs uppercase tracking-[0.2em] mb-1"
					>
						Istruttrice
					</p>
					<h3 class="text-2xl font-heading font-bold text-white mb-4">
						Gioia Donà
					</h3>
					<p class="text-white/50 text-sm leading-relaxed">
						Istruttrice con una particolare attenzione ai giovani
						atleti. Gioia porta energia e passione in ogni lezione,
						creando un ambiente dove i più piccoli possono crescere
						divertendosi e imparando i fondamenti del karate e del
						rispetto reciproco.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const senseiImages = import.meta.glob(
	"/public/images/sensei/*.{jpg,jpeg,png,svg}",
	{ eager: true, import: "default" },
)

const sortedImages = Object.values(senseiImages)
const senseiMorenoImage = sortedImages[0]
const senseiGioiaImage = sortedImages[1] || sortedImages[0]
</script>
