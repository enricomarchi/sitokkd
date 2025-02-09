<template>
	<section
		class="py-20 bg-cover bg-center bg-no-repeat relative"
		style="background-image: url('/images/sfondi-sezioni/sezione-1.jpg')"
	>
		<!-- Overlay generale scuro -->
		<div class="absolute inset-0 bg-black/60"></div>

		<div class="container mx-auto px-4 relative z-10">
			<div class="flex flex-col lg:flex-row gap-8">
				<!-- Colonna Dojo (1/3) -->
				<div class="lg:w-1/3">
					<div
						class="bg-black/50 rounded-xl p-6 h-full"
						v-motion
						:initial="{ opacity: 0, x: -50 }"
						:visible="{ opacity: 1, x: 0 }"
					>
						<div class="space-y-8">
							<div class="flex justify-center mb-8">
								<img
									src="/images/logo/logo-white.svg"
									alt="Ki Kai Dojo Logo"
									class="w-48 h-auto"
								/>
							</div>

							<div>
								<strong
									class="text-xl text-red-400 font-merienda block mb-2"
									>Ki</strong
								>
								<span class="text-gray-300"
									>(気) significa "energia" o "forza
									vitale".</span
								>
								<span class="text-gray-400 text-sm block mt-2">
									Rappresenta l'energia interiore che fluisce
									attraverso il corpo e che può essere
									coltivata attraverso la pratica.
								</span>
							</div>

							<div>
								<strong
									class="text-xl text-red-400 font-merienda block mb-2"
									>Kai</strong
								>
								<span class="text-gray-300"
									>(会) significa "associazione" o
									"gruppo".</span
								>
								<span class="text-gray-400 text-sm block mt-2">
									Indica una comunità di persone unite dallo
									stesso scopo e dalla stessa passione.
								</span>
							</div>

							<div>
								<strong
									class="text-xl text-red-400 font-merienda block mb-2"
									>Dojo</strong
								>
								<span class="text-gray-300"
									>(道場) letteralmente significa "luogo della
									Via".</span
								>
								<span class="text-gray-400 text-sm block mt-2">
									È il luogo sacro dove si pratica e si studia
									l'arte marziale, non solo come spazio fisico
									ma anche come ambiente di crescita
									spirituale e personale.
								</span>
							</div>

							<p class="text-lg font-semibold text-gray-300 mt-4">
								"Ki Kai Dojo" è quindi il luogo dove un gruppo
								di persone si unisce per coltivare l'energia
								interiore attraverso la pratica delle arti
								marziali.
							</p>
						</div>
					</div>
				</div>

				<!-- Colonna Karate (2/3) -->
				<div class="lg:w-2/3">
					<div
						class="bg-black/50 rounded-xl p-8 h-full"
						v-motion
						:initial="{ opacity: 0, x: 50 }"
						:visible="{ opacity: 1, x: 0 }"
					>
						<h2
							class="text-3xl font-merienda text-red-400 text-center mb-12"
						>
							La Via del Karate
						</h2>

						<div class="space-y-8">
							<p class="text-lg font-semibold text-gray-300">
								Il Karate non è solo uno sport o un'arte
								marziale: è una Via (道, "Do") che conduce alla
								crescita personale e all'armonia tra corpo,
								mente e spirito. Attraverso la pratica costante,
								si sviluppa non solo la forza fisica, ma
								soprattutto quella interiore.
							</p>

							<div>
								<h3
									class="text-xl font-merienda text-red-400 mb-2"
								>
									Benefici per Bambini e Ragazzi
								</h3>
								<ul class="space-y-4">
									<li>
										<strong class="text-gray-300"
											>Disciplina e
											Concentrazione:</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											Il karate insegna l'importanza
											dell'autodisciplina e della
											pazienza, qualità fondamentali per
											lo studio e la vita quotidiana.
										</span>
									</li>
									<li>
										<strong class="text-gray-300"
											>Rispetto e Cortesia:</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											Nel dojo si impara il rispetto verso
											i maestri, i compagni e se stessi,
											valori che si riflettono in ogni
											aspetto della vita.
										</span>
									</li>
									<li>
										<strong class="text-gray-300"
											>Fiducia in se stessi:</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											La progressiva padronanza delle
											tecniche costruisce autostima e
											sicurezza personale.
										</span>
									</li>
									<li>
										<strong class="text-gray-300"
											>Controllo emotivo:</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											L'allenamento aiuta a gestire
											stress, ansia e aggressività in modo
											costruttivo.
										</span>
									</li>
								</ul>
							</div>

							<div>
								<h3
									class="text-xl font-merienda text-red-400 mb-2"
								>
									I Pilastri del Nostro Insegnamento
								</h3>
								<ul class="space-y-4">
									<li>
										<strong class="text-gray-300"
											>Perseveranza (継続,
											Keizoku):</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											Insegniamo che il vero progresso
											richiede impegno costante e
											pazienza.
										</span>
									</li>
									<li>
										<strong class="text-gray-300"
											>Armonia (和, Wa):</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											Promuoviamo l'equilibrio tra forza
											fisica e gentilezza d'animo.
										</span>
									</li>
									<li>
										<strong class="text-gray-300"
											>Integrità (誠, Makoto):</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
										>
											Coltiviamo l'onestà e la sincerità
											nelle azioni e nelle relazioni.
										</span>
									</li>
									<li>
										<strong class="text-gray-300"
											>Umiltà (謙虚, Kenko):</strong
										>
										<span
											class="text-gray-400 text-sm block mt-2"
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
