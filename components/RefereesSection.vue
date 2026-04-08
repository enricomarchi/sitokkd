<template>
	<section id="referees" class="py-24 md:py-32 bg-ink-800">
		<div class="container mx-auto px-6">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<p
					class="text-accent-400 text-xs uppercase tracking-[0.3em] mb-4"
				>
					Il nostro impegno
				</p>
				<h2
					class="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
				>
					Arbitri e PDG
				</h2>
				<div class="w-12 h-px bg-white/20 mx-auto mb-6" />
				<p class="text-white/50 leading-relaxed">
					Presidenti di Giuria e Arbitri federali che garantiscono
					competenza e imparzialità nelle competizioni
				</p>
			</div>

			<div
				class="grid gap-8 max-w-5xl mx-auto"
				:class="
					referees.length >= 3
						? 'md:grid-cols-3'
						: referees.length === 2
							? 'md:grid-cols-2 md:max-w-3xl'
							: 'md:max-w-lg'
				"
			>
				<div
					v-for="(person, idx) in referees"
					:key="person.name"
					class="relative p-8 bg-white/5 border border-white/10"
					v-motion
					:initial="{ opacity: 0, y: 40 }"
					:visible="{
						opacity: 1,
						y: 0,
						transition: { delay: idx * 100 },
					}"
				>
					<div
						class="absolute top-0 left-0 right-0 h-1"
						:class="person.lineColor"
					/>

					<div class="overflow-hidden mb-6">
						<img
							v-if="findImage(person.slug)"
							:src="findImage(person.slug)"
							:alt="person.name"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover object-top transition-all duration-700"
						/>
						<div
							v-else
							class="w-full aspect-[3/4] bg-white/5 flex items-center justify-center"
						>
							<svg
								class="w-16 h-16 text-white/10"
								fill="none"
								stroke="currentColor"
								stroke-width="1"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"
								/>
							</svg>
						</div>
					</div>

					<span
						class="inline-block text-xs font-medium px-3 py-1 mb-4 border"
						:class="person.badgeClass"
					>
						{{ person.badge }}
					</span>

					<h3 class="text-xl font-heading font-bold text-white mb-2">
						{{ person.name }}
					</h3>

					<p class="text-white/40 text-sm leading-relaxed">
						{{ person.description }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const base = useRuntimeConfig().app.baseURL
const refereePaths = Object.keys(
	import.meta.glob(
		"/public/images/referees/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
	),
)

function findImage(slug) {
	const path = refereePaths.find((p) =>
		p.toLowerCase().includes(slug.toLowerCase()),
	)
	return path ? base + path.replace("/public/", "") : null
}

const referees = [
	{
		name: "Alessandro Sbeghen",
		slug: "alessandro-sbeghen",
		badge: "Arbitro",
		badgeClass: "border-sky-400/50 text-sky-400",
		lineColor: "bg-sky-500",
		description: "",
	},
	{
		name: "Valerio Candiotto",
		slug: "valerio-candiotto",
		badge: "Arbitro",
		badgeClass: "border-sky-400/50 text-sky-400",
		lineColor: "bg-sky-500",
		description: "",
	},
	{
		name: "Paolo Fontebasso",
		slug: "paolo-fontebasso",
		badge: "Arbitro",
		badgeClass: "border-sky-400/50 text-sky-400",
		lineColor: "bg-sky-500",
		description: "",
	},
	{
		name: "Gioia Donà",
		slug: "gioia-dona",
		badge: "Presidente di Giuria",
		badgeClass: "border-accent-400/50 text-accent-400",
		lineColor: "bg-accent-500",
		description:
			"PDG Nazionale e membro della Commissione Nazionale PDG FIKTA",
	},
	{
		name: "Manuela Orlando",
		slug: "manuela-orlando",
		badge: "Presidente di Giuria",
		badgeClass: "border-accent-400/50 text-accent-400",
		lineColor: "bg-accent-500",
		description: "PDG Regionale",
	},
	{
		name: "Giovanna Di Blasi",
		slug: "giovanna-di-blasi",
		badge: "Presidente di Giuria",
		badgeClass: "border-accent-400/50 text-accent-400",
		lineColor: "bg-accent-500",
		description: "PDG Regionale",
	},
]
</script>
