<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow bg-gray-100">
      <div class="container mx-auto px-6 py-12">
        <table class="table-auto mt-10 bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th class="px-4 py-2">Datum</th>
              <th class="px-4 py-2">Brutto</th>
              <th class="px-4 py-2">Pris</th>
              <th class="px-4 py-2">Netto</th>
              <th class="px-4 py-2">Antal Rätt</th>
              <th class="px-4 py-2">Länk</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data" :key="row[0]">
              <td class="border px-4 py-2">{{ row[0] }}</td>
              <td class="border px-4 py-2">{{ row[2] }}</td>
              <td class="border px-4 py-2">{{ row[3] }}</td>
              <td class="border px-4 py-2">{{ row[4] }}</td>
              <td class="border px-4 py-2">{{ row[5] }}</td>
              <td class="border px-4 py-2">
                <a :href="row[1]" target="_blank" rel="noopener noreferrer" class="flex items-center justify-end truncate">
                  <span class="overflow-hidden max-w-xs">{{ row[1] }}</span>
                  <font-awesome-icon icon="external-link-alt" class="w-4 h-4 ml-3 text-blue-400" />
                </a>
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-bold">Totalt:</td>
              <td class="border px-4 py-2">{{ calculateTotal(data, 2) }}</td>
              <td class="border px-4 py-2">{{ calculateTotal(data, 3) }}</td>
              <td class="border px-4 py-2">{{ calculateTotal(data, 4) }}</td>
              <td class="border px-4 py-2"></td>
              <td class="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <footer class="py-8 bg-gray-800 flex-shrink-0">
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

<script>
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Lägg till ikon i biblioteket
library.add(faExternalLinkAlt);

export default {
  components: {
    FontAwesomeIcon,
  },
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
    calculateTotal(data, columnIndex) {
      return data.reduce((total, row) => {
        const value = parseFloat(row[columnIndex]);
        return isNaN(value) ? total : total + value;
      }, 0);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* CSS-stilar specifika för V75Page-komponenten */
.min-h-screen {
  min-height: 100vh;
}
</style>
