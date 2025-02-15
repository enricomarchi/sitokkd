<template>
	<section
		class="py-20 bg-[#f5e6d3] mx-auto px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1920px]"
	>
		<div class="container mx-auto">
			<div class="flex flex-col lg:flex-row gap-8">
				<!-- Colonna Dojo (1/3) -->
				<div class="lg:w-1/3">
					<div
						class="rounded-xl p-6 h-full"
						v-motion
						:initial="{ opacity: 0, x: -50 }"
						:visible="{ opacity: 1, x: 0 }"
					>
						<div class="space-y-8">
							<div class="flex justify-center mb-8">
								<img
									src="/images/logo/logo.svg"
									alt="Ki Kai Dojo Logo"
									class="w-48 h-auto"
								/>
							</div>

							<div>
								<h2
									class="text-xl text-red-600 font-merienda block mb-2"
								>
									Ki
								</h2>
								<h3 class="text-gray-700">
									(気) significa "energia" o "forza vitale".
								</h3>
								<span class="text-gray-600 text-sm block mt-2">
									Rappresenta l'energia interiore che fluisce
									attraverso il corpo e che può essere
									coltivata attraverso la pratica.
								</span>
							</div>

							<div>
								<h3 class="text-xl text-red-600 block mb-2">
									Kai
								</h3>
								<h3 class="text-gray-700">
									(会) significa "associazione" o "gruppo".
								</h3>
								<span class="text-gray-600 text-sm block mt-2">
									Indica una comunità di persone unite dallo
									stesso scopo e dalla stessa passione.
								</span>
							</div>

							<div>
								<h2 class="text-xl text-red-600 block mb-2">
									Dojo
								</h2>
								<h3 class="text-gray-700">
									(道場) letteralmente significa "luogo della
									Via".
								</h3>
								<span class="text-gray-600 text-sm block mt-2">
									È il luogo sacro dove si pratica e si studia
									l'arte marziale, non solo come spazio fisico
									ma anche come ambiente di crescita
									spirituale e personale.
								</span>
							</div>

							<h2
								class="text-lg font-semibold text-gray-700 mt-4"
							>
								"Ki Kai Dojo" è quindi il luogo dove un gruppo
								di persone si unisce per coltivare l'energia
								interiore attraverso la pratica delle arti
								marziali.
							</h2>
						</div>
					</div>
				</div>

				<!-- Colonna Karate (2/3) -->
				<div class="lg:w-2/3">
					<div
						class="rounded-xl p-8 h-full"
						v-motion
						:initial="{ opacity: 0, x: 50 }"
						:visible="{ opacity: 1, x: 0 }"
					>
						<h2 class="text-3xl text-red-600 text-center mb-12">
							La Via del Karate
						</h2>

						<div class="space-y-8">
							<h2 class="text-lg font-semibold text-gray-700">
								Il Karate non è solo uno sport o un'arte
								marziale: è una Via (道, "Do") che conduce alla
								crescita personale e all'armonia tra corpo,
								mente e spirito. Attraverso la pratica costante,
								si sviluppa non solo la forza fisica, ma
								soprattutto quella interiore.
							</h2>

							<div>
								<h3
									class="text-xl font-merienda text-red-600 mb-2"
								>
									Benefici per Bambini e Ragazzi
								</h3>
								<ul class="space-y-4">
									<li>
										<h3 class="text-gray-700">
											Disciplina e Concentrazione
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											Il karate insegna l'importanza
											dell'autodisciplina e della
											pazienza, qualità fondamentali per
											lo studio e la vita quotidiana.
										</span>
									</li>
									<li>
										<h3 class="text-gray-700">
											Rispetto e Cortesia
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											Nel dojo si impara il rispetto verso
											i maestri, i compagni e se stessi,
											valori che si riflettono in ogni
											aspetto della vita.
										</span>
									</li>
									<li>
										<h3 class="text-gray-700">
											Fiducia in se stessi
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											La progressiva padronanza delle
											tecniche costruisce autostima e
											sicurezza personale.
										</span>
									</li>
									<li>
										<h3 class="text-gray-700">
											Controllo emotivo
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											L'allenamento aiuta a gestire
											stress, ansia e aggressività in modo
											costruttivo.
										</span>
									</li>
								</ul>
							</div>

							<div>
								<h2 class="text-xl text-red-600 mb-2">
									I Pilastri del Nostro Insegnamento
								</h2>
								<ul class="space-y-4">
									<li>
										<h3 class="text-gray-700">
											Perseveranza (継続, Keizoku):
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											Insegniamo che il vero progresso
											richiede impegno costante e
											pazienza.
										</span>
									</li>
									<li>
										<h3 class="text-gray-700">
											Armonia (和, Wa):
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											Promuoviamo l'equilibrio tra forza
											fisica e gentilezza d'animo.
										</span>
									</li>
									<li>
										<h3 class="text-gray-700">
											Integrità (誠, Makoto):
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											Coltiviamo l'onestà e la sincerità
											nelle azioni e nelle relazioni.
										</span>
									</li>
									<li>
										<h3 class="text-gray-700">
											Umiltà (謙虚, Kenko):
										</h3>
										<span
											class="text-gray-600 text-sm block mt-2"
										>
											Manteniamo sempre un atteggiamento
											di apertura all'apprendimento.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
