<template>
	<section class="py-16 bg-[#e6d5c3]">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center my-0">
				I Nostri Sostenitori
			</h2>
			<div class="flex flex-wrap justify-center items-center gap-12">
				<a
					v-for="supporter in supporters"
					:key="supporter.id"
					:href="supporter.url"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:scale-105 transition-transform duration-300"
				>
					<img
						:src="supporter.logo"
						:alt="supporter.name"
						class="h-48 w-auto max-w-[300px] object-contain"
					/>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
const supporters = [
	{
		id: 1,
		name: "METALLICA MARCON",
		url: "https://metallicamarcon.it/",
		logo: "/images/sostenitori/metallica-marcon.png",
	},
	{
		id: 2,
		name: "FOTOSTAMPA TREVISO",
		url: "https://www.fotostampa.it/",
		logo: "/images/sostenitori/fotostampa-treviso.png",
	},
	// Aggiungi qui altri sostenitori seguendo lo stesso formato
]
</script>
