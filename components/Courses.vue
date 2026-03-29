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
					Percorsi per ogni livello di esperienza: dai primi passi sul
					tatami fino all'allenamento avanzato
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				<div
					v-for="course in courses"
					:key="course.title"
					class="group relative bg-ink-50 p-8 hover:bg-ink-900 transition-colors duration-500"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{ opacity: 1, y: 0 }"
				>
					<!-- Colored top line -->
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
const courses = [
	{
		title: "Principianti",
		badge: "Cintura bianca – gialla",
		badgeClass:
			"border-emerald-300 text-emerald-700 group-hover:border-emerald-400/40 group-hover:text-emerald-300",
		lineColor: "bg-emerald-500",
		dotColor: "bg-emerald-400 group-hover:bg-emerald-300",
		description:
			"Per chi si avvicina al karate per la prima volta. Le basi della tecnica, l'etichetta del dojo e i primi kata.",
		schedule: [
			"Lunedì e Mercoledì: 17:00 – 18:30",
			"Sabato: 10:00 – 11:30",
		],
	},
	{
		title: "Intermedio",
		badge: "Cintura arancione – blu",
		badgeClass:
			"border-amber-300 text-amber-700 group-hover:border-amber-400/40 group-hover:text-amber-300",
		lineColor: "bg-amber-500",
		dotColor: "bg-amber-400 group-hover:bg-amber-300",
		description:
			"Perfezionamento della tecnica, kumite controllato e preparazione per le prime competizioni.",
		schedule: ["Martedì e Giovedì: 18:30 – 20:00", "Sabato: 11:30 – 13:00"],
	},
	{
		title: "Avanzato",
		badge: "Cintura marrone – nera",
		badgeClass:
			"border-accent-300 text-accent-600 group-hover:border-accent-400/40 group-hover:text-accent-300",
		lineColor: "bg-accent-500",
		dotColor: "bg-accent-400 group-hover:bg-accent-300",
		description:
			"Allenamento intensivo. Kata avanzati, bunkai, kumite e preparazione agonistica.",
		schedule: [
			"Lunedì e Mercoledì: 20:00 – 21:30",
			"Venerdì: 19:00 – 21:00",
		],
	},
]
</script>
