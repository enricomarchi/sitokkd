<template>
	<section
		class="py-16 bg-[#e6d5c3] mx-auto px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1920px]"
	>
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center my-0">Affiliazioni</h2>
			<div class="flex flex-wrap justify-center items-center gap-8 pt-12">
				<a
					v-for="affiliation in affiliations"
					:key="affiliation.id"
					:href="affiliation.url"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-80 transition-opacity"
				>
					<img
						:src="affiliation.logo"
						:alt="affiliation.name"
						class="h-12 md:h-48 w-auto"
					/>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
const affiliations = [
	{
		id: 1,
		name: "FIKTA",
		url: "https://fikta.it/",
		logo: "/images/affiliazioni/FIKTA.png",
	},
	{
		id: 2,
		name: "FIJLKAM",
		url: "https://www.fijlkam.it/",
		logo: "/images/affiliazioni/FIJLKAM.png",
	},
	{
		id: 3,
		name: "LIBERTAS",
		url: "https://www.libertasnazionale.it/",
		logo: "/images/affiliazioni/libertas.png",
	},
	{
		id: 4,
		name: "AICS",
		url: "https://www.aics.it/",
		logo: "/images/affiliazioni/aics.png",
	},
]
</script>
