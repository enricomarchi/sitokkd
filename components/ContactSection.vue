<template>
	<section id="contact" class="py-20">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center mb-12">Contattaci</h2>
			<div class="grid md:grid-cols-2 gap-12">
				<div
					class="space-y-8"
					v-motion
					:initial="{ opacity: 0, x: -100 }"
					:visible="{ opacity: 1, x: 0 }"
				>
					<div>
						<h3 class="text-2xl font-semibold mb-4">
							Informazioni
						</h3>
						<div class="space-y-3">
							<a
								href="https://maps.google.com/?q=Via+IV+Novembre+30,+31030+Carbonera+TV"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center hover:text-red-600 transition-colors"
							>
								<svg
									class="w-5 h-5 mr-2 fill-current"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"
									/>
								</svg>
								Palazzetto dello sport, Via IV Novembre 30 –
								31030 Carbonera (TV)
							</a>
							<a
								href="tel:+393495630438"
								class="flex items-center hover:text-red-600 transition-colors"
							>
								<svg
									class="w-5 h-5 mr-2 fill-current"
									viewBox="0 0 24 24"
								>
									<path
										d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
									/>
								</svg>
								+39 349 563 0438
							</a>
							<a
								href="https://wa.me/393495630438"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center hover:text-red-600 transition-colors"
							>
								<svg
									class="w-5 h-5 mr-2 fill-current"
									viewBox="0 0 24 24"
								>
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
									/>
								</svg>
								+39 349 563 0438
							</a>
							<a
								href="mailto:moreno@karatecarbonera.com"
								class="flex items-center hover:text-red-600 transition-colors"
							>
								<svg
									class="w-5 h-5 mr-2 fill-current"
									viewBox="0 0 24 24"
								>
									<path
										d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
									/>
								</svg>
								moreno@karatecarbonera.com
							</a>
						</div>
					</div>
					<div>
						<h3 class="text-2xl font-semibold mb-4">
							Orari Segreteria
						</h3>
						<div class="space-y-2">
							<p>Lunedì - Venerdì: 9:00 - 20:00</p>
							<p>Sabato: 9:00 - 13:00</p>
							<p>Domenica: Chiuso</p>
						</div>
					</div>
				</div>
				<div
					v-motion
					:initial="{ opacity: 0, x: 100 }"
					:visible="{ opacity: 1, x: 0 }"
					class="space-y-8"
				>
					<div>
						<h3 class="text-2xl font-semibold mb-4">
							Vieni a Trovarci
						</h3>
						<p class="text-gray-600 mb-4">
							Ti invitiamo a visitare il nostro dojo per una
							lezione di prova gratuita. Potrai conoscere il
							maestro, vedere la struttura e capire meglio il
							nostro metodo di insegnamento.
						</p>
						<p class="text-gray-600">
							Non è necessaria alcuna prenotazione: presentati in
							segreteria negli orari di apertura e saremo lieti di
							accoglierti.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-semibold mb-4">
							Come Raggiungerci
						</h3>
						<p class="text-gray-600">
							Il KI KAI DOJO si trova presso il Palazzetto dello
							sport di Carbonera, facilmente raggiungibile sia in
							auto che con i mezzi pubblici. Ampio parcheggio
							gratuito disponibile per tutti gli allievi.
						</p>
					</div>
					<div>
						<h3 class="text-2xl font-semibold mb-4">
							Cosa Portare
						</h3>
						<ul
							class="list-disc list-inside text-gray-600 space-y-2"
						>
							<li>
								Abbigliamento comodo per la lezione di prova
							</li>
							<li>Un documento di identità</li>
							<li>
								Certificato medico (se decidi di iscriverti)
							</li>
							<li>Tanta voglia di imparare! 🥋</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
