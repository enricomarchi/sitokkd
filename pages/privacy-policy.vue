<template>
	<div class="min-h-screen bg-ink-950 text-white">
		<div class="container mx-auto px-6 py-24 max-w-3xl">
			<NuxtLink
				to="/"
				class="inline-flex items-center gap-2 text-accent-400 text-sm mb-12 hover:text-accent-300 transition-colors"
			>
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Torna alla home
			</NuxtLink>

			<h1 class="text-3xl md:text-5xl font-heading font-bold mb-8">
				Informativa sulla Privacy
			</h1>
			<p class="text-white/40 text-sm mb-12">
				Ultimo aggiornamento: 20 aprile 2026
			</p>

			<div class="prose-policy">
				<h2>1. Titolare del trattamento</h2>
				<p>
					Il titolare del trattamento dei dati è
					<strong>Ki Kai Dojo ASD</strong>, con sede in Viale Brigata
					Marche 9, 31030 Carbonera (TV), Italia.<br />
					Email:
					<a href="mailto:moreno@karatecarbonera.com"
						>moreno@karatecarbonera.com</a
					><br />
					Telefono: +39 349 563 0438
				</p>

				<h2>2. Dati raccolti</h2>
				<p>
					Questo sito web è di natura informativa e
					<strong>non raccoglie dati personali</strong>
					tramite moduli di contatto, registrazioni o aree riservate.
				</p>
				<p>I dati che possono essere trattati sono:</p>
				<ul>
					<li>
						<strong>Dati di navigazione:</strong> il server web
						registra automaticamente informazioni tecniche come
						indirizzo IP, tipo di browser, pagine visitate, data e
						ora di accesso. Questi dati sono utilizzati
						esclusivamente per garantire il funzionamento del sito e
						per fini statistici anonimi.
					</li>
					<li>
						<strong>Cookie tecnici:</strong> il sito utilizza
						esclusivamente cookie tecnici necessari al
						funzionamento. Per maggiori dettagli, consulta la
						<NuxtLink
							to="/cookie-policy"
							class="text-accent-400 hover:text-accent-300"
							>Cookie Policy</NuxtLink
						>.
					</li>
				</ul>

				<h2>3. Servizi di terze parti</h2>
				<h3>Google Maps</h3>
				<p>
					Il sito integra mappe interattive fornite da Google Maps
					(Google Ireland Limited, Gordon House, Barrow Street,
					Dublino 4, Irlanda). Le mappe vengono caricate
					<strong>solo dopo il tuo consenso esplicito</strong>. Una
					volta attivate, Google potrebbe raccogliere dati quali
					l'indirizzo IP e informazioni sul dispositivo.
				</p>
				<p>
					Privacy Policy di Google:
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noopener noreferrer"
						>https://policies.google.com/privacy</a
					>
				</p>

				<h2>4. Base giuridica del trattamento</h2>
				<ul>
					<li>
						<strong>Legittimo interesse</strong> (art. 6.1.f GDPR):
						per i dati di navigazione necessari al funzionamento
						tecnico del sito.
					</li>
					<li>
						<strong>Consenso</strong> (art. 6.1.a GDPR): per il
						caricamento di Google Maps e di eventuali cookie non
						tecnici.
					</li>
				</ul>

				<h2>5. Conservazione dei dati</h2>
				<p>
					I dati di navigazione (log del server) vengono conservati
					per un massimo di 90 giorni e successivamente eliminati. Non
					vengono conservati altri dati personali.
				</p>

				<h2>6. Trasferimento dei dati</h2>
				<p>
					I dati non vengono trasferiti a terzi, salvo quanto previsto
					per i servizi di terze parti descritti al punto 3,
					attivabili solo previo consenso.
				</p>

				<h2>7. Diritti dell'interessato</h2>
				<p>Ai sensi degli articoli 15-22 del GDPR, hai diritto di:</p>
				<ul>
					<li>accedere ai tuoi dati personali;</li>
					<li>ottenerne la rettifica o la cancellazione;</li>
					<li>limitarne il trattamento;</li>
					<li>opporti al trattamento;</li>
					<li>richiedere la portabilità dei dati;</li>
					<li>
						proporre reclamo all'autorità di controllo (Garante per
						la protezione dei dati personali –
						<a
							href="https://www.garanteprivacy.it"
							target="_blank"
							rel="noopener noreferrer"
							>www.garanteprivacy.it</a
						>).
					</li>
				</ul>
				<p>
					Per esercitare i tuoi diritti, puoi scrivere a
					<a href="mailto:moreno@karatecarbonera.com"
						>moreno@karatecarbonera.com</a
					>.
				</p>

				<h2>8. Modifiche all'informativa</h2>
				<p>
					Il Titolare si riserva il diritto di apportare modifiche
					alla presente informativa. La data dell'ultimo aggiornamento
					è indicata in cima alla pagina.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	title: "Privacy Policy",
})
</script>

<style scoped>
.prose-policy h2 {
	@apply text-xl font-heading font-bold text-white mt-10 mb-4;
}

.prose-policy h3 {
	@apply text-lg font-heading font-semibold text-white/80 mt-6 mb-3;
}

.prose-policy p {
	@apply text-white/60 text-sm leading-relaxed mb-4;
}

.prose-policy ul {
	@apply text-white/60 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1;
}

.prose-policy a {
	@apply text-accent-400 hover:text-accent-300 transition-colors underline;
}

.prose-policy strong {
	@apply text-white/80;
}
</style>
