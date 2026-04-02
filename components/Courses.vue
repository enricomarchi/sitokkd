<template>
	<section id="courses" class="py-24 md:py-32 bg-white">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Inizia il tuo percorso
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-ink-900 mb-6"
				>
					I Corsi
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Percorsi per ogni età e livello di esperienza, in tre sedi
					nel comune di Carbonera
				</p>
			</div>

			<!-- Sede tabs -->
			<div class="flex flex-wrap justify-center gap-3 mb-12">
				<button
					v-for="sede in sedi"
					:key="sede.nome"
					class="px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300"
					:class="
						activeSede === sede.nome
							? 'bg-ink-900 text-white'
							: 'bg-ink-100 text-ink-500 hover:bg-ink-200'
					"
					@click="activeSede = sede.nome"
				>
					{{ sede.label }}
				</button>
			</div>

			<!-- Indirizzo sede attiva -->
			<div class="flex items-center justify-center gap-2 mb-12">
				<svg
					class="w-5 h-5 text-accent-500 flex-shrink-0"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
					/>
				</svg>
				<p class="text-ink-600 text-sm font-medium tracking-wide">
					{{ currentSede?.indirizzo }}
				</p>
			</div>

			<!-- Corsi per sede attiva -->
			<div
				class="grid gap-8 max-w-5xl mx-auto"
				:class="
					currentCourses.length >= 3
						? 'md:grid-cols-3'
						: currentCourses.length === 2
							? 'md:grid-cols-2 md:max-w-3xl'
							: 'md:max-w-lg'
				"
			>
				<div
					v-for="course in currentCourses"
					:key="course.title"
					class="group relative bg-ink-50 p-8 hover:bg-ink-900 transition-colors duration-500"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<div
						class="absolute top-0 left-0 right-0 h-1"
						:class="course.lineColor"
					/>

					<span
						class="inline-block text-xs font-medium px-3 py-1 mb-6 border transition-colors duration-500"
						:class="course.badgeClass"
					>
						{{ course.badge }}
					</span>

					<h3
						class="text-xl font-heading font-bold text-ink-900 group-hover:text-white mb-4 transition-colors duration-500"
					>
						{{ course.title }}
					</h3>

					<p
						class="text-ink-400 group-hover:text-white/60 text-sm leading-relaxed mb-8 transition-colors duration-500"
					>
						{{ course.description }}
					</p>

					<div>
						<p
							class="text-xs uppercase tracking-wider text-ink-300 group-hover:text-white/40 mb-3 transition-colors duration-500"
						>
							Orari
						</p>
						<ul class="space-y-2">
							<li
								v-for="(time, index) in course.schedule"
								:key="index"
								class="text-ink-600 group-hover:text-white/80 text-sm flex items-start gap-2 transition-colors duration-500"
							>
								<span
									class="w-1 h-1 rounded-full mt-2 flex-shrink-0 transition-colors duration-500"
									:class="course.dotColor"
								/>
								{{ time }}
							</li>
						</ul>
					</div>

					<!-- Sede diversa -->
					<div
						v-if="course.sede"
						class="mt-6 pt-4 border-t border-ink-200 group-hover:border-white/20 transition-colors duration-500"
					>
						<div class="flex items-start gap-2">
							<svg
								class="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
								/>
							</svg>
							<p
								class="text-xs font-semibold text-orange-600 group-hover:text-orange-300 transition-colors duration-500"
							>
								{{ course.sede }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div class="text-center mt-16">
				<a
					href="#contact"
					class="inline-block px-8 py-3 bg-ink-900 text-white text-sm uppercase tracking-[0.15em] hover:bg-accent-500 transition-colors duration-300"
				>
					Prenota una Prova Gratuita
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
const activeSede = ref("carbonera")

const sedi = [
	{
		nome: "carbonera",
		label: "Carbonera",
		indirizzo:
			"Palestra Scuole Medie – Viale Brigata Marche, 9 – Carbonera",
	},
	{
		nome: "saletto",
		label: "Saletto (Breda di Piave)",
		indirizzo:
			"Palestra Scuola Primaria – Via Davanzo Sergente, 52 – Saletto-San Bartolomeo",
	},
]

const coursesBySede = {
	carbonera: [
		{
			title: "Tigrotti dello Shotokan",
			badge: "Età prescolare",
			badgeClass:
				"border-orange-300 text-orange-700 group-hover:border-orange-400/40 group-hover:text-orange-300",
			lineColor: "bg-orange-500",
			dotColor: "bg-orange-400 group-hover:bg-orange-300",
			description:
				"Un percorso ludico-motorio per i più piccoli in età prescolare. Gioco, movimento e prime basi del karate.",
			schedule: ["Giovedì: 17:00 – 18:00"],
			sede: "Scuola Primaria Tino Anselmi – Via IV Novembre, 30 – Carbonera",
		},
		{
			title: "Bambini Principianti",
			badge: "Cintura bianca",
			badgeClass:
				"border-emerald-300 text-emerald-700 group-hover:border-emerald-400/40 group-hover:text-emerald-300",
			lineColor: "bg-emerald-500",
			dotColor: "bg-emerald-400 group-hover:bg-emerald-300",
			description:
				"Per i bambini che si avvicinano al karate per la prima volta. Le basi della tecnica, l'etichetta del dojo e i primi kata.",
			schedule: ["Martedì e Venerdì: 17:00 – 18:00"],
		},
		{
			title: "Bambini Cinture Colorate",
			badge: "Cinture colorate",
			badgeClass:
				"border-amber-300 text-amber-700 group-hover:border-amber-400/40 group-hover:text-amber-300",
			lineColor: "bg-amber-500",
			dotColor: "bg-amber-400 group-hover:bg-amber-300",
			description:
				"Perfezionamento della tecnica, kata più avanzati e avviamento al kumite per i bambini con esperienza.",
			schedule: ["Martedì e Venerdì: 18:00 – 19:00"],
		},
		{
			title: "Ragazzi e Agonisti",
			badge: "Agonismo",
			badgeClass:
				"border-sky-300 text-sky-700 group-hover:border-sky-400/40 group-hover:text-sky-300",
			lineColor: "bg-sky-500",
			dotColor: "bg-sky-400 group-hover:bg-sky-300",
			description:
				"Allenamento intensivo per ragazzi e agonisti. Kumite, kata avanzati e preparazione alle competizioni.",
			schedule: ["Martedì e Venerdì: 18:30 – 20:00"],
		},
		{
			title: "Adulti Principianti e Colorate",
			badge: "Adulti",
			badgeClass:
				"border-violet-300 text-violet-700 group-hover:border-violet-400/40 group-hover:text-violet-300",
			lineColor: "bg-violet-500",
			dotColor: "bg-violet-400 group-hover:bg-violet-300",
			description:
				"Per adulti che iniziano o proseguono il percorso nel karate. Tecnica, kata e kumite in un ambiente stimolante.",
			schedule: ["Martedì e Venerdì: 20:00 – 21:00"],
		},
		{
			title: "Adulti Cinture Nere",
			badge: "Dan",
			badgeClass:
				"border-accent-300 text-accent-600 group-hover:border-accent-400/40 group-hover:text-accent-300",
			lineColor: "bg-accent-500",
			dotColor: "bg-accent-400 group-hover:bg-accent-300",
			description:
				"Sessione dedicata alle cinture nere. Perfezionamento, bunkai, kata superiori e preparazione esami.",
			schedule: ["Martedì e Venerdì: 20:00 – 22:00"],
		},
	],
	saletto: [
		{
			title: "Bambini Principianti",
			badge: "Cintura bianca",
			badgeClass:
				"border-emerald-300 text-emerald-700 group-hover:border-emerald-400/40 group-hover:text-emerald-300",
			lineColor: "bg-emerald-500",
			dotColor: "bg-emerald-400 group-hover:bg-emerald-300",
			description:
				"Per i bambini che si avvicinano al karate per la prima volta. Le basi della tecnica, l'etichetta del dojo e i primi kata.",
			schedule: ["Lunedì e Mercoledì: 17:00 – 18:00"],
		},
		{
			title: "Bambini Cinture Colorate",
			badge: "Cinture colorate",
			badgeClass:
				"border-amber-300 text-amber-700 group-hover:border-amber-400/40 group-hover:text-amber-300",
			lineColor: "bg-amber-500",
			dotColor: "bg-amber-400 group-hover:bg-amber-300",
			description:
				"Perfezionamento della tecnica, kata più avanzati e avviamento al kumite per i bambini con esperienza.",
			schedule: ["Lunedì e Mercoledì: 18:00 – 19:00"],
		},
	],
}

const currentSede = computed(() =>
	sedi.find((s) => s.nome === activeSede.value),
)

const currentCourses = computed(() => coursesBySede[activeSede.value] || [])
</script>
