<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold mb-4">MSTW</h1>
      <p class="text-lg text-gray-600 mb-6"> A vue app</p>
        <ul class="text-lg text-gray-600 mb-6 list-disc list-inside">
            <li>Yatzy</li>
            <li>Stryktipset</li>
            <li>It uses Axios for fetching data from Google Sheets</li>
            
        </ul>
      <div class="space-x-4">
        <router-link to="/sheet-data" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Sheet Data
        </router-link>
 
      </div>
    </div>

    <footer class="mx-auto mt-24 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-40 sm:pb-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
       
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
 
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
    </footer>
  </template>
  
  
  
  <script>
  export default {
    name: 'StartPage',
    // Komponentens logik och data
  }
  </script>
  
  <style scoped>
  /* CSS-stilar specifika för StartPage-komponenten */
  </style>
  