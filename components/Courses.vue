<template>
	<section id="courses" class="py-20 bg-gray-50">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center mb-12 font-merienda">
				I Nostri Corsi
			</h2>

			<!-- Carbonera -->
			<div class="mb-16">
				<h3
					class="text-3xl font-bold text-center mb-8 font-merienda text-red-600"
				>
					Sede di Carbonera
				</h3>
				<div class="grid md:grid-cols-3 gap-8">
					<div
						v-for="course in carboneraCourses"
						:key="course.title"
						class="bg-white rounded-lg shadow-lg p-6"
						v-motion
						:initial="{ opacity: 0, y: 100 }"
						:visible="{ opacity: 1, y: 0 }"
					>
						<h3 class="text-2xl font-bold mb-4 font-merienda">
							{{ course.title }}
						</h3>
						<p class="text-gray-600 mb-4">
							{{ course.description }}
						</p>
						<div>
							<h4 class="font-semibold mb-2">Orari:</h4>
							<ul class="space-y-2">
								<li
									v-for="(time, index) in course.schedule"
									:key="index"
								>
									{{ time }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- Saletto -->
			<div>
				<h3
					class="text-3xl font-bold text-center mb-8 font-merienda text-red-600"
				>
					Sede di Saletto di Piave
				</h3>
				<div class="grid md:grid-cols-2 gap-8">
					<div
						v-for="course in salettoCourses"
						:key="course.title"
						class="bg-white rounded-lg shadow-lg p-6"
						v-motion
						:initial="{ opacity: 0, y: 100 }"
						:visible="{ opacity: 1, y: 0 }"
					>
						<h3 class="text-2xl font-bold mb-4 font-merienda">
							{{ course.title }}
						</h3>
						<p class="text-gray-600 mb-4">
							{{ course.description }}
						</p>
						<div>
							<h4 class="font-semibold mb-2">Orari:</h4>
							<ul class="space-y-2">
								<li
									v-for="(time, index) in course.schedule"
									:key="index"
								>
									{{ time }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const carboneraCourses = [
	{
		title: "Bambini Principianti",
		description:
			"Corso dedicato ai bambini che si avvicinano per la prima volta al karate. Focus su coordinazione, disciplina e divertimento.",
		schedule: ["Martedì e Venerdì: 17:00 - 18:00"],
	},
	{
		title: "Bambini Avanzato",
		description:
			"Per giovani karateka che hanno già esperienza e vogliono perfezionare la loro tecnica.",
		schedule: ["Martedì e Venerdì: 18:00 - 19:00"],
	},
	{
		title: "Agonisti",
		description:
			"Allenamento intensivo per atleti che partecipano a competizioni. Focus su kata, kumite e preparazione atletica.",
		schedule: ["Martedì e Venerdì: 19:00 - 20:00"],
	},
	{
		title: "Amatori Principianti",
		description:
			"Ideale per adulti che vogliono avvicinarsi al karate. Si imparano le basi e i primi kata.",
		schedule: ["Martedì e Venerdì: 20:00 - 21:00"],
	},
	{
		title: "Amatori Avanzato",
		description:
			"Per praticanti esperti che vogliono perfezionare la loro tecnica e approfondire gli aspetti del karate tradizionale.",
		schedule: ["Martedì e Venerdì: 21:00 - 22:00"],
	},
	{
		title: "Difesa Personale (Krav Maga)",
		description:
			"Corso pratico di autodifesa basato sul Krav Maga, adatto a tutti.",
		schedule: ["Mercoledì: ???? - ????"],
	},
]

const salettoCourses = [
	{
		title: "Bambini Principianti",
		description:
			"Corso dedicato ai bambini che si avvicinano per la prima volta al karate. Focus su coordinazione, disciplina e divertimento.",
		schedule: ["Lunedì e Mercoledì: 17:00 - 18:00"],
	},
]
</script>
