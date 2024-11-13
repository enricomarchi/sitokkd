<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">KI KAI DOJO</h3>
          <p class="text-gray-400">
            La via del karate è un percorso di crescita continua, 
            fisica e spirituale.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Link Rapidi</h3>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.href">
              <a :href="item.href" class="text-gray-400 hover:text-white transition-colors">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Contatti</h3>
          <div class="space-y-2 text-gray-400">
            <p>Via IV Novembre 30</p>
            <p>31030 Carbonera (TV)</p>
            <p>Tel: +39 349 563 0438</p>
            <p>Email: moreno@karatecarbonera.com</p>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {{ new Date().getFullYear() }} KI KAI DOJO. Tutti i diritti riservati.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menuItems = [
  { text: 'Home', href: '#hero' },
  { text: 'La Palestra', href: '#about-dojo' },
  { text: 'Istruttori', href: '#about-me' },
  { text: 'Corsi', href: '#courses' },
  { text: 'Contatti', href: '#contact' }
]
</script>