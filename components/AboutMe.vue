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
					:ref="(el) => trackInstructor(el, 0)"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div class="overflow-hidden mb-6">
						<img
							:src="senseiMorenoImage"
							alt="Maestro Moreno Donà"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover object-top"
						/>
					</div>
					<h3 class="text-2xl font-heading font-bold text-white mb-1">
						Moreno Donà
					</h3>
					<p class="text-accent-400 text-xs uppercase tracking-widest mb-4">6° Dan</p>
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
					:ref="(el) => trackInstructor(el, 1)"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div class="overflow-hidden mb-6">
						<img
							:src="senseiGioiaImage"
							alt="Istruttrice Gioia Donà"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover object-top"
						/>
					</div>
					<h3 class="text-2xl font-heading font-bold text-white mb-1">
						Gioia Donà
					</h3>
					<p class="text-accent-400 text-xs uppercase tracking-widest mb-4">3° Dan</p>
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
const base = useRuntimeConfig().app.baseURL
const senseiPaths = Object.keys(
	import.meta.glob("/public/images/sensei/*.{jpg,jpeg,png,svg,JPG,JPEG,PNG}"),
).sort()
const senseiMorenoImage = senseiPaths[0]
	? base + senseiPaths[0].replace("/public/", "")
	: ""
const senseiGioiaImage = senseiPaths[1]
	? base + senseiPaths[1].replace("/public/", "")
	: senseiMorenoImage

// Mobile: attiva effetto colore quando l'istruttore è visibile
const visibleInstructors = reactive(new Set())
const instructorElMap = new Map()
let observer = null

const trackInstructor = (el, idx) => {
	if (el) {
		instructorElMap.set(idx, el)
		if (observer) observer.observe(el)
	}
}

onMounted(() => {
	if (window.matchMedia("(max-width: 767px)").matches) {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const idx = [...instructorElMap.entries()].find(
						([, el]) => el === entry.target,
					)?.[0]
					if (idx !== undefined) {
						if (entry.isIntersecting) visibleInstructors.add(idx)
						else visibleInstructors.delete(idx)
					}
				})
			},
			{ threshold: 0.3 },
		)
		instructorElMap.forEach((el) => observer.observe(el))
	}
})

onUnmounted(() => {
	if (observer) observer.disconnect()
})
</script>
