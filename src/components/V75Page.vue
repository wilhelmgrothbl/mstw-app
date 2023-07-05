<template>
    <div>
      <navbar></navbar>
      <table class="table-auto mt-10">
        <thead>
          <tr>
            <th class="px-4 py-2">Datum</th>
            <th class="px-4 py-2">Url</th>
            <th class="px-4 py-2">Brutto</th>
            <th class="px-4 py-2">Pris</th>
            <th class="px-4 py-2">Netto</th>
            <th class="px-4 py-2">Antal Rätt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row[0]">
            <td class="border px-4 py-2">{{ row[0] }}</td>
            <td class="border px-4 py-2">
              <a :href="row[1]" target="_blank" rel="noopener noreferrer">{{ row[1] }}</a>
            </td>
            <td class="border px-4 py-2">{{ row[2] }}</td>
            <td class="border px-4 py-2">{{ row[3] }}</td>
            <td class="border px-4 py-2">{{ row[4] }}</td>
            <td class="border px-4 py-2">{{ row[5] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'V75Page',
    data() {
      return {
        data: [], // Håller datan som hämtas från Google Sheets
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/V75!A1:AN67?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o');
          this.data = response.data.values.slice(1); // Ignorera den första raden med rubriker
        } catch (error) {
          console.error(error);
        }
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style scoped>
  /* CSS-stilar specifika för V75Page-komponenten */
  </style>
  