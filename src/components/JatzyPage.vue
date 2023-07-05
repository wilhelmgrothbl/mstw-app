<template>
    <div>
      <navbar></navbar>
      <h1 class="text-1xl mb-4">Jatzzy</h1>
      <SheetData />
    </div>
  </template>
  
  <script>
  import SheetData from './SheetData.vue';

  export default {
    name: 'JatzyPage',
    components: {
  SheetData
},

    // Komponentens logik och data
  }
  </script>
  
  <style scoped>
  /* CSS-stilar specifika för StryktipsetPage-komponenten */
  </style>
  