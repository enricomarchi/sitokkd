<template>
  <section id="about-dojo" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">La Nostra Palestra</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div 
          class="prose lg:prose-xl"
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible="{ opacity: 1, x: 0 }"
        >
          <p>
            La nostra palestra di karate è un luogo dove la tradizione incontra il moderno. 
            Con oltre 20 anni di esperienza nell'insegnamento delle arti marziali, 
            offriamo un ambiente accogliente e professionale per tutti gli appassionati.
          </p>
          <p>
            Il nostro dojo è equipaggiato con:
          </p>
          <ul>
            <li>Area tatami professionale di 200mq</li>
            <li>Spogliatoi moderni con docce</li>
            <li>Area riscaldamento e preparazione fisica</li>
            <li>Sala meditation</li>
          </ul>
        </div>
        <div 
          class="grid grid-cols-2 gap-4"
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible="{ opacity: 1, x: 0 }"
        >
          <img 
            v-for="(image, index) in dojoImages" 
            :key="index"
            :src="image"
            :alt="`Immagine ${index + 1} del dojo`"
            class="rounded-lg shadow-lg w-full h-48 object-cover"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dojoImages = Object.values(
  import.meta.glob('/public/images/dojo/*.{jpg,jpeg,png,svg}', {
    eager: true,
    import: 'default'
  })
)
</script>