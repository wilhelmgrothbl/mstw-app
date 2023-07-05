<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <navbar></navbar>
      <img src="https://images.unsplash.com/photo-1577721583789-1ffb7b86a280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30" />
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <header class="mb-16">
          <nav class="flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold text-white sm:text-6xl">MSTW</h1>
              <p class="text-lg text-gray-300"></p>
            </div>
            <!-- Här kan du lägga till ytterligare innehåll i headern -->
          </nav>
        </header>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <div v-for="card in cards" :key="card.name" class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
            <component :is="card.icon" class="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
            <div class="text-base leading-7">
              <h3 class="font-semibold text-white">{{ card.name }}</h3>
              <p class="mt-2 text-gray-300">{{ card.description }}</p>
            </div>
          </div>
        </div>
        <!-- Här kan du lägga till ytterligare innehåll efter kortgriden -->
      </div>
    </div>
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </div>
    <!-- Footer -->
    <footer class="py-8 bg-gray-800 mt-auto">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-semibold text-white">Kontakt</h3>
            <p class="mt-2 text-gray-400">Hudiksvall, Sweden</p>
            <p class="mt-2 text-gray-400">+46725128254</p>
          </div>
          
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8">
          <p class="text-sm text-gray-400">&copy; 2023 MSTW. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  </div>
</template>


<script setup>
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const cards = [
  {
    name: 'Jatzy',
    description: 'Historik från tusentals Jatzy-spel.',
    icon: PhoneIcon,
  },
  {
    name: 'Stryktipset',
    description: 'Uppföljande statistik från Stryktipset.',
    icon: LifebuoyIcon,
  },
  {
    name: 'V75',
    description: 'Stora vinster från V75.',
    icon: NewspaperIcon,
  },
]
const stats = [
  { id: 1, name: 'Vinster', value: '$0' },
  { id: 2, name: 'Antal Yatzy spel', value: '30 303' },
  { id: 3, name: 'Förluster', value: '$33 000' },
]
</script>

<style scoped>
/* CSS-stilar specifika för StartPage-komponenten */
</style>
