<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="px-4 py-2"></th> <!-- Tom cell för mellanrum -->
        <th v-for="(header, index) in headers" :key="index" class="px-4 py-2">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:bg-gray-100">
        <td class="border px-4 py-2">{{ rowIndex + 1 }}</td> <!-- Index för varje rad -->
        <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="border px-4 py-2">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      headers: [],
      data: []
    };
  },
  methods: {
    async getSheetData() {
      const response = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/Blankett!A1:Z1000?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o');
      this.headers = response.data.values[0].slice(0, 1); // Anpassa för att endast ta med kolumnerna A till AN
      this.data = response.data.values.slice(1); // Anpassa för att endast ta med raderna 2 till 67
    }
  },
  created() {
    this.getSheetData();
  }
};
</script>
  
  <style scoped>
  /* Du kan lägga till din egen CSS här */
  </style>
  