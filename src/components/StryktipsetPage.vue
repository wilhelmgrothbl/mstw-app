<template>
  <div class="bg-cover bg-center h-screen ">
    <navbar></navbar>
    <div class="bg-gray-200 bg-opacity-80 p-8 rounded-lg shadow-md m-4">
      <h1 class="text-4xl font-bold mb-4">STRYKTIPSET</h1>
      <div class="grid grid-cols-2 gap-8">
      <div>
        <h2 class="text-xl mb-4">Ursprungliga data</h2>
        <table class="min-w-full divide-y divide-gray-200 shadow-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insats</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lagets vinst</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brutto</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Antal rätt</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spelläggare</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="row in stryktipsetData" :key="row[0]">
              <td class="px-6 py-4 whitespace-nowrap">{{ row[0] }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ row[1] }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ row[2] }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ row[3] }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ row[4] }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ row[5] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 class="text-xl mb-4">Totalt inspelat per spelläggare</h2>
        <table class="min-w-full divide-y divide-gray-200 shadow-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Totalt Inspelat Mattias</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Totalt inspelat Stefan</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Totalt inspelat Thomas</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Totalt inspelat Wille</th>
            </tr>
          </thead>
         <tbody class="bg-white divide-y divide-gray-200">
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">{{ totaltInspelatData[0] }} kr</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ totaltInspelatData[1] }} kr</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ totaltInspelatData[2] }} kr</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ totaltInspelatData[3] }} kr</td>
  </tr>
</tbody>

        </table>
      </div>
    </div>
  </div>
</div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'StryktipsetPage',
  data() {
    return {
      stryktipsetData: [],
      totaltInspelatData: {},
    };
  },
  methods: {
    async fetchData() {
      try {
    const stryktipsetResponse = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/Stryktipset!A1:AN67?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o');
    this.stryktipsetData = stryktipsetResponse.data.values.slice(1);


const totaltInspelatResponse = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/TotaltInspelat!G1:J3?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o');
this.totaltInspelatData = totaltInspelatResponse.data.values[1];



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
/* CSS-stilar specifika för StryktipsetPage-komponenten */
</style>
