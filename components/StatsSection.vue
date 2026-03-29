<template>
	<section class="py-16 bg-crimson-700 text-white">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
				<div
					v-for="stat in stats"
					:key="stat.label"
					v-motion
					:initial="{ opacity: 0, y: 50 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div
						class="text-4xl md:text-5xl font-heading font-bold text-gold-400 mb-2"
					>
						{{ stat.value }}
					</div>
					<div
						class="text-sm md:text-base text-white/80 uppercase tracking-wider"
					>
						{{ stat.label }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const stats = [
	{ value: "30+", label: "Anni di esperienza" },
	{ value: "500+", label: "Allievi formati" },
	{ value: "50+", label: "Cinture nere" },
	{ value: "7°", label: "Dan Maestro" },
]
</script>
