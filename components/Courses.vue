<template>
  <section id="courses" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">I Nostri Corsi</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="course in courses" 
          :key="course.title"
          class="bg-white rounded-lg shadow-lg p-6"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          <h3 class="text-2xl font-bold mb-4">{{ course.title }}</h3>
          <p class="text-gray-600 mb-4">{{ course.description }}</p>
          <div>
            <h4 class="font-semibold mb-2">Orari:</h4>
            <ul class="space-y-2">
              <li v-for="(time, index) in course.schedule" :key="index">
                {{ time }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    title: 'Corso Principianti',
    description: 'Ideale per chi si avvicina per la prima volta al karate. Imparerai le basi, la disciplina e i primi kata.',
    schedule: [
      'Lunedì e Mercoledì: 17:00 - 18:30',
      'Sabato: 10:00 - 11:30'
    ]
  },
  {
    title: 'Corso Intermedio',
    description: 'Per chi ha già esperienza e vuole perfezionare la tecnica e iniziare a competere.',
    schedule: [
      'Martedì e Giovedì: 18:30 - 20:00',
      'Sabato: 11:30 - 13:00'
    ]
  },
  {
    title: 'Corso Avanzato',
    description: 'Allenamento intensivo per cinture marroni e nere, focus su kata avanzati e preparazione agonistica.',
    schedule: [
      'Lunedì e Mercoledì: 20:00 - 21:30',
      'Venerdì: 19:00 - 21:00'
    ]
  }
]
</script>