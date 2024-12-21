<template>
	<div>
		<NavBar />
		<main>
			<div class="pt-20">
				<section class="py-20">
					<div class="container mx-auto px-4">
						<h2
							class="text-4xl font-bold text-center mb-12 font-merienda"
						>
							I Nostri Istruttori
						</h2>

						<!-- Maestro Moreno -->
						<div
							class="grid md:grid-cols-2 gap-12 items-center mb-20"
						>
							// ...existing code from AboutMe.vue...
						</div>

						<!-- Istruttrice Gioia -->
						<div class="grid md:grid-cols-2 gap-12 items-center">
							// ...existing code from AboutMe.vue...
						</div>
					</div>
				</section>
			</div>
		</main>
		<FooterSection />
	</div>
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
const senseiGioiaImage = Object.values(senseiImages)[1] || senseiMorenoImage
</script>
