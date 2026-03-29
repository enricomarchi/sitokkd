<template>
	<section id="dojo" class="py-24 md:py-32 bg-ink-50">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Il nostro spazio
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					Il Dojo
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Uno spazio pensato per l'allenamento e la crescita. Il Ki
					Kai Dojo si trova presso il Palazzetto dello sport di
					Carbonera, con ampio tatami, spogliatoi e tutto il
					necessario per allenarti al meglio.
				</p>
			</div>

			<!-- Photo Grid -->
			<div
				class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto"
				v-motion
				:initial="{ opacity: 0, y: 40 }"
				:visible="{ opacity: 1, y: 0 }"
			>
				<div
					v-for="(image, index) in dojoImages"
					:key="index"
					class="overflow-hidden"
					:class="index === 0 ? 'col-span-2 row-span-2' : ''"
				>
					<img
						:src="image"
						:alt="`Il dojo - foto ${index + 1}`"
						loading="lazy"
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
						:class="index === 0 ? 'aspect-square' : 'aspect-square'"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const dojoImages = Object.values(
	import.meta.glob("/public/images/dojo/*.{jpg,jpeg,png,svg}", {
		eager: true,
		import: "default",
	}),
)
</script>
