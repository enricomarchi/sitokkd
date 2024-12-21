<template>
	<section class="py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-4xl font-bold text-center mb-12 font-merienda">
					La Via del Karate
				</h2>

				<div
					class="space-y-12"
					v-motion
					:initial="{ opacity: 0, y: 50 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div class="prose lg:prose-lg mx-auto">
						<p class="text-lg md:text-xl leading-relaxed">
							Il Karate non è solo uno sport o un'arte marziale: è
							una Via (道, "Do") che conduce alla crescita
							personale e all'armonia tra corpo, mente e spirito.
							Attraverso la pratica costante, si sviluppa non solo
							la forza fisica, ma soprattutto quella interiore.
						</p>

						<h3
							class="text-2xl font-merienda text-red-600 mt-8 mb-4"
						>
							Benefici per Bambini e Ragazzi
						</h3>
						<ul class="space-y-4">
							<li>
								<strong>Disciplina e Concentrazione:</strong> Il
								karate insegna l'importanza dell'autodisciplina
								e della pazienza, qualità fondamentali per lo
								studio e la vita quotidiana.
							</li>
							<li>
								<strong>Rispetto e Cortesia:</strong> Nel dojo
								si impara il rispetto verso i maestri, i
								compagni e se stessi, valori che si riflettono
								in ogni aspetto della vita.
							</li>
							<li>
								<strong>Fiducia in se stessi:</strong> La
								progressiva padronanza delle tecniche costruisce
								autostima e sicurezza personale.
							</li>
							<li>
								<strong>Controllo emotivo:</strong>
								L'allenamento aiuta a gestire stress, ansia e
								aggressività in modo costruttivo.
							</li>
						</ul>

						<h3
							class="text-2xl font-merienda text-red-600 mt-8 mb-4"
						>
							I Pilastri del Nostro Insegnamento
						</h3>
						<ul class="space-y-4">
							<li>
								<strong>Perseveranza (継続, Keizoku):</strong>
								Insegniamo che il vero progresso richiede
								impegno costante e pazienza.
							</li>
							<li>
								<strong>Armonia (和, Wa):</strong> Promuoviamo
								l'equilibrio tra forza fisica e gentilezza
								d'animo.
							</li>
							<li>
								<strong>Integrità (誠, Makoto):</strong>
								Coltiviamo l'onestà e la sincerità nelle azioni
								e nelle relazioni.
							</li>
							<li>
								<strong>Umiltà (謙虚, Kenko):</strong>
								Manteniamo sempre un atteggiamento di apertura
								all'apprendimento.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
