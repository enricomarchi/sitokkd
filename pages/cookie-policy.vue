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
				Cookie Policy
			</h1>
			<p class="text-white/40 text-sm mb-12">
				Ultimo aggiornamento: 20 aprile 2026
			</p>

			<div class="prose-policy">
				<h2>1. Cosa sono i cookie</h2>
				<p>
					I cookie sono piccoli file di testo che i siti web salvano
					sul tuo dispositivo (computer, tablet, smartphone) durante
					la navigazione. Servono a memorizzare informazioni utili per
					migliorare l'esperienza di navigazione.
				</p>

				<h2>2. Cookie utilizzati da questo sito</h2>

				<h3>Cookie tecnici (necessari)</h3>
				<p>
					Questo sito utilizza esclusivamente cookie tecnici
					strettamente necessari al funzionamento. Non richiedono il
					consenso dell'utente ai sensi dell'art. 122 del D.Lgs.
					196/2003 e del Provvedimento del Garante n. 229/2014.
				</p>
				<div class="overflow-x-auto mb-6">
					<table class="w-full text-sm text-white/60">
						<thead>
							<tr class="border-b border-white/10">
								<th class="text-left py-2 pr-4 text-white/80">
									Nome
								</th>
								<th class="text-left py-2 pr-4 text-white/80">
									Scopo
								</th>
								<th class="text-left py-2 text-white/80">
									Durata
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-white/5">
								<td class="py-2 pr-4 font-mono text-xs">
									kkd_cookie_consent
								</td>
								<td class="py-2 pr-4">
									Memorizza la scelta sui cookie
									(accetta/rifiuta)
								</td>
								<td class="py-2">365 giorni</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3>Cookie di terze parti (previo consenso)</h3>
				<p>
					Le mappe di Google Maps, disponibili nella sezione Contatti,
					vengono caricate
					<strong>solo dopo il tuo consenso esplicito</strong>. Una
					volta accettate, Google potrebbe impostare propri cookie per
					il funzionamento del servizio.
				</p>
				<div class="overflow-x-auto mb-6">
					<table class="w-full text-sm text-white/60">
						<thead>
							<tr class="border-b border-white/10">
								<th class="text-left py-2 pr-4 text-white/80">
									Servizio
								</th>
								<th class="text-left py-2 pr-4 text-white/80">
									Fornitore
								</th>
								<th class="text-left py-2 text-white/80">
									Privacy Policy
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-white/5">
								<td class="py-2 pr-4">Google Maps</td>
								<td class="py-2 pr-4">Google Ireland Ltd.</td>
								<td class="py-2">
									<a
										href="https://policies.google.com/privacy"
										target="_blank"
										rel="noopener noreferrer"
										>policies.google.com/privacy</a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h2>3. Come gestire i cookie</h2>
				<p>
					Puoi modificare la tua scelta sui cookie in qualsiasi
					momento cliccando sul pulsante qui sotto:
				</p>
				<button
					class="mt-2 mb-6 px-6 py-2 bg-accent-500 text-white text-sm font-semibold hover:bg-accent-600 transition-colors"
					@click="resetConsent"
				>
					Modifica preferenze cookie
				</button>
				<p>
					Puoi anche gestire i cookie direttamente dal tuo browser.
					Ecco le guide per i principali browser:
				</p>
				<ul>
					<li>
						<a
							href="https://support.google.com/chrome/answer/95647"
							target="_blank"
							rel="noopener noreferrer"
							>Google Chrome</a
						>
					</li>
					<li>
						<a
							href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
							target="_blank"
							rel="noopener noreferrer"
							>Mozilla Firefox</a
						>
					</li>
					<li>
						<a
							href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
							target="_blank"
							rel="noopener noreferrer"
							>Apple Safari</a
						>
					</li>
					<li>
						<a
							href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
							target="_blank"
							rel="noopener noreferrer"
							>Microsoft Edge</a
						>
					</li>
				</ul>

				<h2>4. Titolare del trattamento</h2>
				<p>
					<strong>Ki Kai Dojo ASD</strong><br />
					Viale Brigata Marche 9, 31030 Carbonera (TV), Italia<br />
					Email:
					<a href="mailto:moreno@karatecarbonera.com"
						>moreno@karatecarbonera.com</a
					>
				</p>

				<h2>5. Riferimenti normativi</h2>
				<ul>
					<li>Regolamento UE 2016/679 (GDPR)</li>
					<li>
						D.Lgs. 196/2003 (Codice Privacy), come modificato dal
						D.Lgs. 101/2018
					</li>
					<li>Provvedimento del Garante n. 229 dell'8 maggio 2014</li>
					<li>
						Linee guida cookie e altri strumenti di tracciamento del
						Garante – 10 giugno 2021
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	title: "Cookie Policy",
})

function resetConsent() {
	if (import.meta.client) {
		document.cookie =
			"kkd_cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
		window.location.reload()
	}
}
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
