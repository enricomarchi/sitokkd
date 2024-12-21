<template>
	<section id="about-dojo" class="py-20 bg-gray-50">
		<div class="container mx-auto px-4">
			<div
				class="max-w-3xl mx-auto text-center space-y-12"
				v-motion
				:initial="{ opacity: 0, y: 50 }"
				:visible="{ opacity: 1, y: 0 }"
			>
				<p class="text-lg md:text-xl leading-relaxed">
					<strong
						class="text-2xl md:text-3xl text-red-600 font-merienda block mb-4"
						>Ki</strong
					>
					<span class="text-gray-600"
						>(気) significa "energia" o "forza vitale".</span
					><br class="mb-4" />
					<span class="text-gray-800"
						>Rappresenta l'energia interiore che fluisce attraverso
						il corpo e che può essere coltivata attraverso la
						pratica.</span
					>
				</p>

				<p class="text-lg md:text-xl leading-relaxed">
					<strong
						class="text-2xl md:text-3xl text-red-600 font-merienda block mb-4"
						>Kai</strong
					>
					<span class="text-gray-600"
						>(会) significa "associazione" o "gruppo".</span
					><br class="mb-4" />
					<span class="text-gray-800"
						>Indica una comunità di persone unite dallo stesso scopo
						e dalla stessa passione.</span
					>
				</p>

				<p class="text-lg md:text-xl leading-relaxed">
					<strong
						class="text-2xl md:text-3xl text-red-600 font-merienda block mb-4"
						>Dojo</strong
					>
					<span class="text-gray-600"
						>(道場) letteralmente significa "luogo della Via".</span
					><br class="mb-4" />
					<span class="text-gray-800"
						>È il luogo sacro dove si pratica e si studia l'arte
						marziale, non solo come spazio fisico ma anche come
						ambiente di crescita spirituale e personale.</span
					>
				</p>

				<p class="text-xl md:text-2xl font-semibold text-gray-900 mt-8">
					"Ki Kai Dojo" è quindi il luogo dove un gruppo di persone si
					unisce per coltivare l'energia interiore attraverso la
					pratica delle arti marziali.
				</p>
			</div>
		</div>
	</section>
</template>
