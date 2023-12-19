<template>
    <div class="bg-white py-24 md:py-32 lg:py-40">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vinster</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Tidiga fina vinster från alla medlemmar</p>
        </div>
        <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-1">
          <li v-for="person in people" :key="person.name" class="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img class="max-w-full h-auto object-cover" :src="person.imageUrl" alt="" />
            <div class="p-6">
              <h3 class="text-lg font-semibold leading-8 text-gray-900">{{ person.name }}</h3>
              <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
              <p class="mt-4 text-base leading-7 text-gray-600">{{ person.bio }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <script setup>
  const people = [
    {
      name: 'Wilhelm',
      role: 'Betting-expert',
      imageUrl: require('../assets/v6.png'),
      bio: 'En mångbong, x50 + x2.5 (endast v6)',
    },
    {
      name: 'Wilhelm',
      role: 'Betting-expert',
      imageUrl: require('../assets/DD.png'),
      bio: 'En klassiskt rak DD. ',
    },
    {
      name: 'Wilhelm',
      role: 'Betting-expert',
      imageUrl: require('../assets/trippel.png'),
      bio: 'Trippelsystem. V75. Jobbet...  ',
    },
    // More people...
  ]
  </script>
  
  <style scoped>
  /* CSS-stilar specifika för StartPage-komponenten */
  </style>
  