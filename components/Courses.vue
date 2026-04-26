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
					I nostri corsi di Karate
				</h2>
				<div class="w-12 h-px bg-ink-200 mx-auto mb-6" />
				<p class="text-ink-400 leading-relaxed">
					Percorsi per ogni età e livello di esperienza, in tre sedi
					nel comune di Carbonera
				</p>
			</div>

			<!-- Tutte le sedi -->
			<div v-for="(sezione, idx) in sezioni" :key="sezione.indirizzo">
				<!-- Nome sede -->
				<h3
					class="text-2xl md:text-3xl font-heading font-bold text-ink-900 text-center tracking-wider"
					:class="idx > 0 ? 'mt-20' : ''"
				>
					{{ sezione.nome }}
				</h3>
				<!-- Indirizzo sede -->
				<div class="flex items-center justify-center gap-2 mb-12 mt-3">
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
						{{ sezione.indirizzo }}
					</p>
				</div>

				<!-- Griglia corsi -->
				<div
					class="grid gap-8 max-w-5xl mx-auto"
					:class="
						sezione.corsi.length >= 3
							? 'md:grid-cols-3'
							: sezione.corsi.length === 2
								? 'md:grid-cols-2 md:max-w-3xl'
								: 'md:max-w-lg'
					"
				>
					<div
						v-for="course in sezione.corsi"
						:key="course.slug"
						class="relative p-8 bg-ink-50"
						v-motion
						:initial="{ opacity: 0, y: 40 }"
						:visible="{ opacity: 1, y: 0 }"
					>
						<div
							class="absolute top-0 left-0 right-0 h-1"
							:class="course.lineColor"
						/>

						<span
							class="inline-block text-xs font-medium px-3 py-1 mb-6 border"
							:class="course.badgeClass"
						>
							{{ course.badge }}
						</span>

						<p
							v-if="course.subtitle"
							class="text-xl font-heading font-bold text-ink-900 mb-1"
						>
							{{ course.subtitle }}
						</p>
						<h3
							class="text-xl font-heading font-bold mb-4 text-ink-900"
						>
							{{ course.title }}
						</h3>

						<p class="text-sm leading-relaxed mb-8 text-ink-400">
							{{ course.description }}
						</p>

						<div>
							<p
								class="text-xs uppercase tracking-wider mb-3 text-ink-300"
							>
								Orari
							</p>
							<ul class="space-y-2">
								<li
									v-for="(time, index) in course.schedule"
									:key="index"
									class="text-sm flex items-start gap-2 text-ink-600"
								>
									<span
										class="w-1 h-1 rounded-full mt-2 flex-shrink-0"
										:class="course.dotColor"
									/>
									{{ time }}
								</li>
							</ul>
						</div>

						<!-- Bottone galleria -->
						<button
							type="button"
							class="mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm uppercase tracking-[0.15em] font-medium bg-accent-500 text-white hover:bg-accent-600 transition-colors duration-300"
							@click="openGallery(course)"
							:aria-label="`Apri foto del corso ${course.title}`"
						>
							<svg
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
								/>
							</svg>
							Foto
						</button>
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

		<!-- Gallery Modal -->
		<ClientOnly>
			<Teleport to="body">
				<Transition name="modal-fade">
					<div
						v-if="galleryOpen"
						class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
						@click.self="closeGallery"
						role="dialog"
						aria-modal="true"
						aria-label="Galleria corso"
					>
						<div
							class="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10"
						>
							<button
								type="button"
								class="absolute top-4 right-4 text-ink-400 hover:text-ink-900 transition-colors"
								@click="closeGallery"
								aria-label="Chiudi galleria"
							>
								<svg
									class="w-6 h-6"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<h3
								class="text-2xl font-heading font-bold text-ink-900 mb-2"
							>
								{{ galleryCourse?.title }}
							</h3>
							<p class="text-ink-400 text-sm mb-8">
								Galleria fotografica
							</p>

							<div
								v-if="galleryImages.length"
								class="grid grid-cols-2 md:grid-cols-3 gap-4"
							>
								<img
									v-for="(img, i) in galleryImages"
									:key="i"
									:src="img"
									:alt="`${galleryCourse?.title} - foto ${i + 1}`"
									loading="lazy"
									decoding="async"
									class="w-full aspect-[4/3] object-cover cursor-pointer hover:opacity-80 transition-opacity"
									@click="openLightbox(i)"
								/>
							</div>
							<p v-else class="text-ink-300 text-center py-12">
								Foto in arrivo...
							</p>
						</div>
					</div>
				</Transition>
			</Teleport>
		</ClientOnly>

		<!-- Lightbox -->
		<ClientOnly>
			<Teleport to="body">
				<Transition name="modal-fade">
					<div
						v-if="lightboxOpen"
						class="fixed inset-0 z-[60] bg-black/95 p-4"
						role="dialog"
						aria-modal="true"
						aria-label="Visualizzazione foto a schermo intero"
					>
						<!-- Swipe layer – copre tutto lo schermo -->
						<div
							ref="lbSwipeRef"
							class="absolute inset-0 z-[61] touch-none"
						/>
						<div
							class="relative z-[62] h-full flex items-center justify-center pointer-events-none"
						>
							<button
								type="button"
								class="absolute top-4 right-4 text-white/60 hover:text-white transition-colors pointer-events-auto"
								@click="lightboxOpen = false"
								aria-label="Chiudi foto"
							>
								<svg
									class="w-8 h-8"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</button>
							<button
								v-if="lightboxIndex > 0"
								type="button"
								class="absolute left-4 text-white/60 hover:text-white transition-colors pointer-events-auto"
								@click="lightboxIndex--"
								aria-label="Foto precedente"
							>
								<svg
									class="w-8 h-8"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 19.5 8.25 12l7.5-7.5"
									/>
								</svg>
							</button>
							<img
								:src="galleryImages[lightboxIndex]"
								:alt="`Foto ${lightboxIndex + 1}`"
								decoding="async"
								class="max-h-[85vh] max-w-[90vw] object-contain"
								draggable="false"
							/>
							<button
								v-if="lightboxIndex < galleryImages.length - 1"
								type="button"
								class="absolute right-4 text-white/60 hover:text-white transition-colors pointer-events-auto"
								@click="lightboxIndex++"
								aria-label="Foto successiva"
							>
								<svg
									class="w-8 h-8"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m8.25 4.5 7.5 7.5-7.5 7.5"
									/>
								</svg>
							</button>
						</div>
					</div>
				</Transition>
			</Teleport>
		</ClientOnly>
	</section>
</template>

<script setup>
const galleryOpen = ref(false)
const galleryCourse = ref(null)
const galleryImages = ref([])
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const sedi = {
	carbonera: "Palestra Scuole Medie – Viale Brigata Marche, 9 – Carbonera",
	tinaAnselmi:
		"Scuola Primaria Tina Anselmi – Via IV Novembre, 30 – Carbonera",
	saletto:
		"Palestra Scuola Primaria – Via Sergente Davanzo, 52 – Saletto-San Bartolomeo",
}

const coursesBySede = {
	carbonera: [
		{
			title: "Tigrotti dello Shotokan",
			subtitle: "Gioco-Karate",
			slug: "tina-anselmi/tigrotti",
			badge: "Età prescolare",
			badgeClass: "border-orange-300 text-orange-700",
			lineColor: "bg-orange-500",
			dotColor: "bg-orange-400",
			description:
				"Un percorso ludico-motorio per i più piccoli in età prescolare. Gioco, movimento e prime basi del karate.",
			schedule: ["Giovedì: 17:00 – 18:00"],
			altraSede: true,
		},
		{
			title: "Bambini Principianti",
			slug: "carbonera/bambini-principianti",
			badge: "Cintura bianca",
			badgeClass: "border-emerald-300 text-emerald-700",
			lineColor: "bg-emerald-500",
			dotColor: "bg-emerald-400",
			description:
				"Per i bambini che si avvicinano al karate per la prima volta. Le basi della tecnica, l'etichetta del dojo e i primi kata.",
			schedule: ["Martedì e Venerdì: 17:00 – 18:00"],
		},
		{
			title: "Bambini Cinture Colorate",
			slug: "carbonera/bambini-colorate",
			badge: "Cinture colorate",
			badgeClass: "border-amber-300 text-amber-700",
			lineColor: "bg-amber-500",
			dotColor: "bg-amber-400",
			description:
				"Perfezionamento della tecnica, kata più avanzati e avviamento al kumite per i bambini con esperienza.",
			schedule: ["Martedì e Venerdì: 18:00 – 19:00"],
		},
		{
			title: "Ragazzi e Agonisti",
			slug: "carbonera/ragazzi-agonisti",
			badge: "Agonismo",
			badgeClass: "border-sky-300 text-sky-700",
			lineColor: "bg-sky-500",
			dotColor: "bg-sky-400",
			description:
				"Allenamento intensivo per ragazzi e agonisti. Kumite, kata avanzati e preparazione alle competizioni.",
			schedule: ["Martedì e Venerdì: 18:30 – 20:00"],
		},
		{
			title: "Adulti Principianti e Colorate",
			slug: "carbonera/adulti-principianti",
			badge: "Adulti",
			badgeClass: "border-violet-300 text-violet-700",
			lineColor: "bg-violet-500",
			dotColor: "bg-violet-400",
			description:
				"Per adulti che iniziano o proseguono il percorso nel karate. Tecnica, kata e kumite in un ambiente stimolante.",
			schedule: ["Martedì e Venerdì: 20:00 – 21:00"],
		},
		{
			title: "Adulti Cinture Nere",
			slug: "carbonera/adulti-nere",
			badge: "Dan",
			badgeClass: "border-accent-300 text-accent-600",
			lineColor: "bg-accent-500",
			dotColor: "bg-accent-400",
			description:
				"Sessione dedicata alle cinture nere. Perfezionamento, bunkai, kata superiori e preparazione esami.",
			schedule: ["Martedì e Venerdì: 20:00 – 22:00"],
		},
		{
			title: "Difesa Personale",
			slug: "tina-anselmi/difesa-personale",
			badge: "Tutti i livelli",
			badgeClass: "border-rose-300 text-rose-700",
			lineColor: "bg-rose-500",
			dotColor: "bg-rose-400",
			description:
				"Corso di difesa personale aperto a tutti. Tecniche pratiche e consapevolezza per la sicurezza quotidiana.",
			schedule: ["Mercoledì: 20:30 – 22:00"],
			altraSede: true,
		},
	],
	saletto: [
		{
			title: "Tigrotti dello Shotokan + Bambini Principianti",
			subtitle: "Gioco-Karate",
			slug: "saletto/tigrotti",
			badge: "Età prescolare",
			badgeClass: "border-orange-300 text-orange-700",
			lineColor: "bg-orange-500",
			dotColor: "bg-orange-400",
			description:
				"Un percorso ludico-motorio per i più piccoli in età prescolare. Gioco, movimento e prime basi del karate.",
			schedule: ["Lunedì e Mercoledì: 17:00 – 18:00"],
		},
		{
			title: "Bambini Cinture Colorate",
			slug: "saletto/bambini-colorate",
			badge: "Cinture colorate",
			badgeClass: "border-amber-300 text-amber-700",
			lineColor: "bg-amber-500",
			dotColor: "bg-amber-400",
			description:
				"Perfezionamento della tecnica, kata più avanzati e avviamento al kumite per i bambini con esperienza.",
			schedule: ["Lunedì e Mercoledì: 18:00 – 19:00"],
		},
	],
}

const carboneraPrincipali = coursesBySede.carbonera.filter((c) => !c.altraSede)
const carboneraAnselmi = coursesBySede.carbonera.filter((c) => c.altraSede)

const sezioni = [
	{
		nome: "CARBONERA",
		indirizzo: sedi.carbonera,
		corsi: carboneraPrincipali,
	},
	{
		nome: 'CARBONERA "Tina Anselmi"',
		indirizzo: sedi.tinaAnselmi,
		corsi: carboneraAnselmi,
	},
	{ nome: "SALETTO", indirizzo: sedi.saletto, corsi: coursesBySede.saletto },
]

// Gallery images index (dynamic – dev: Nitro API, prod: PHP endpoint)
const courseImagesIndex = ref({})
const base = useRuntimeConfig().app.baseURL

onMounted(async () => {
	const isLocalPreview =
		import.meta.client &&
		["localhost", "127.0.0.1"].includes(window.location.hostname)
	const endpoints =
		isLocalPreview || import.meta.dev
			? ["/api/course-images", `${base}api/course-images.php`]
			: [`${base}api/course-images.php`, "/api/course-images"]

	for (const url of endpoints) {
		try {
			const res = await fetch(url)
			if (!res.ok) continue
			courseImagesIndex.value = await res.json()
			break
		} catch {
			/* try next endpoint */
		}
	}
})

function getImagesForSlug(slug) {
	const files = courseImagesIndex.value[slug] || []
	return files.map(
		(f) => `${base}images/courses/${slug}/${encodeURIComponent(f)}`,
	)
}

async function openGallery(course) {
	galleryCourse.value = course
	galleryImages.value = getImagesForSlug(course.slug)
	galleryOpen.value = true
	if (import.meta.client) document.body.style.overflow = "hidden"
}

function closeGallery() {
	galleryOpen.value = false
	lightboxOpen.value = false
	if (import.meta.client) document.body.style.overflow = ""
}

function openLightbox(index) {
	lightboxIndex.value = index
	lightboxOpen.value = true
}

// Swipe lightbox
const lbSwipeRef = ref(null)
let lbStartX = 0
let lbSwiped = false

watch(lightboxOpen, (open) => {
	nextTick(() => {
		const el = lbSwipeRef.value
		if (!el) return
		if (open) {
			el.addEventListener("pointerdown", onLbPointerDown)
			el.addEventListener("pointermove", onLbPointerMove)
			el.addEventListener("pointerup", onLbPointerUp)
			el.addEventListener("pointercancel", onLbPointerUp)
		}
	})
})

function onLbPointerDown(e) {
	lbStartX = e.clientX
	lbSwiped = false
	e.target.setPointerCapture(e.pointerId)
}

function onLbPointerMove(e) {
	e.preventDefault()
}

function onLbPointerUp(e) {
	const dx = e.clientX - lbStartX
	if (Math.abs(dx) > 40) {
		lbSwiped = true
		if (dx < 0 && lightboxIndex.value < galleryImages.value.length - 1) {
			lightboxIndex.value++
		} else if (dx > 0 && lightboxIndex.value > 0) {
			lightboxIndex.value--
		}
	} else if (!lbSwiped) {
		lightboxOpen.value = false
	}
}

function onLbBackdropClick() {
	if (!lbSwiped) {
		lightboxOpen.value = false
	}
}

onUnmounted(() => {
	const el = lbSwipeRef.value
	if (!el) return
	el.removeEventListener("pointerdown", onLbPointerDown)
	el.removeEventListener("pointermove", onLbPointerMove)
	el.removeEventListener("pointerup", onLbPointerUp)
	el.removeEventListener("pointercancel", onLbPointerUp)
	if (import.meta.client) document.body.style.overflow = ""
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
	opacity: 0;
}
</style>
