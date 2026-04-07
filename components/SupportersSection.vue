<template>
	<section id="supporters" class="py-24 md:py-32 bg-ink-900">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-400 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Grazie a chi ci sostiene
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
				>
					I Nostri Sostenitori
				</h2>
				<div class="w-12 h-px bg-white/20 mx-auto mb-6" />
				<p class="text-white/50 leading-relaxed">
					Un ringraziamento speciale alle aziende e alle realtà che
					credono nel nostro progetto e ci supportano con le loro
					donazioni
				</p>
			</div>

			<div class="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
				<a
					v-for="(supporter, idx) in supporters"
					:key="supporter.name"
					:href="supporter.url"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex flex-col items-center gap-4 p-6 bg-white/5 border border-accent-500/40 transition-all duration-300 w-40 sm:w-48"
					v-motion
					:initial="{ opacity: 0, y: 30 }"
					:visible="{
						opacity: 1,
						y: 0,
						transition: { delay: idx * 80 },
					}"
				>
					<div class="w-full flex items-center justify-center">
						<img
							:src="`/images/supporters/${supporter.logo}`"
							:alt="supporter.name"
							loading="lazy"
							class="w-full h-auto object-contain transition-all duration-500"
						/>
					</div>
					<span
						class="text-white/70 text-xs uppercase tracking-wider text-center transition-colors duration-300"
					>
						{{ supporter.name }}
					</span>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
const supporters = [
	{
		name: "Metallica Marcon",
		logo: "metallica_marcon.png",
		url: "https://metallicamarcon.it/",
	},
]
</script>
