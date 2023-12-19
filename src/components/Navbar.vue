<template>
  <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
      <div class="flex items-center justify-between h-24 p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0 p-4">
            <router-link to="/" class="h-8 w-8 ">
              <img class="h-24 w-24" src="../assets/highlogo.png" alt="Logo">
            </router-link>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Hem</router-link>
              <router-link to="/stryktipset" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Stryktipset</router-link>
              <router-link to="/v75" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">V75</router-link>
              <router-link to="/skryt"  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Skryt</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Lägg till eventuella anpassade CSS-stilar här */
</style>
