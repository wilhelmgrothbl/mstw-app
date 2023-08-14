<template>
  <div class="bg-cover bg-center text-gray-800 bg-gray-100">
    <navbar></navbar>
    <div class="container mx-auto p-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden m-4 p-8">
        <div class="flex items-center justify-center">
          <img
            :src="require('@/assets/header.png')"
            alt="Stryktipset"
            class="w-7/8 h-1/3 object-cover mb-10 rounded-lg"
          />
        </div>

        <div class="grid grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-semibold mb-4 text-blue-900">
              Ursprungliga data
            </h2>
            <table class="min-w-full divide-y divide-gray-500 shadow-sm">
              <thead class="bg-gray-200">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Datum
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Insats
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Lagets vinst
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Netto
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Antal rätt
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Spelläggare
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="row in stryktipsetData" :key="row[0]">
                  <td class="px-6 py-4 whitespace-nowrap">{{ row[0] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row[1] }} kr</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row[2] }} kr</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row[3] }} kr</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row[4] }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ row[5] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4 text-blue-900">
              Totalt inspelat per spelläggare
            </h2>
            <table class="min-w-full divide-y divide-gray-500 shadow-sm">
              <thead class="bg-gray-200">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Mattias
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Stefan
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Thomas
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Wille
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ totaltInspelatData[0] }} kr
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ totaltInspelatData[1] }} kr
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ totaltInspelatData[2] }} kr
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ totaltInspelatData[3] }} kr
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4">
              <h2 class="text-2xl font-semibold mb-4 text-blue-900">
                Total insats, vinst och Netto
              </h2>
              <table class="min-w-full divide-y divide-gray-900 shadow-sm">
                <thead class="bg-gray-200">
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total insats
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total vinst
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Netto
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ formattedTotalInsats }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ formattedTotalVinstForlust }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ brutto }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-4">
              <h2 class="text-2xl font-semibold mb-4 text-blue-900">
                Antal rätt per spelläggare
              </h2>
              <table class="min-w-full divide-y divide-gray-900 shadow-sm">
                <thead class="bg-gray-200">
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Mattias
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Stefan
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Thomas
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Wille
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ antalRatt[0] }} rätt
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ antalRatt[1] }} rätt
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ antalRatt[2] }} rätt
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ antalRatt[3] }} rätt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StryktipsetPage",
  data() {
    return {
      stryktipsetData: [],
      totaltInspelatData: {},
      antalRatt: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const stryktipsetResponse = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/Stryktipset!A1:AN67?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o"
        );
        this.stryktipsetData = stryktipsetResponse.data.values.slice(1);

        const totaltInspelatResponse = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/TotaltInspelat!G1:J3?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o"
        );
        this.totaltInspelatData = totaltInspelatResponse.data.values[1];
        const antalRattResponse = await axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1YvFeUsA_BHsMJ98Rh5fP9XQdHMurqwXtMAagMDeZxaY/values/TotaltInspelat!K2:N2?key=AIzaSyANbHKpbR0EXWbGrisgtJoOzkx8xiGNA0o"
    );
    this.antalRatt = antalRattResponse.data.values[0];
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalInsats() {
      return this.stryktipsetData.reduce(
        (total, row) => total + Number(row[1]),
        0
      );
    },
    totalVinstForlust() {
      return this.stryktipsetData.reduce(
        (total, row) => total + Number(row[2]),
        0
      );
    },
    formattedTotalInsats() {
      return this.totalInsats.toLocaleString("sv-SE") + " kr";
    },
    formattedTotalVinstForlust() {
      return Math.abs(this.totalVinstForlust).toLocaleString("sv-SE") + " kr";
    },
    brutto() {
      const bruttoValue = this.totalVinstForlust + this.totalInsats; // notera att tecknet på insatsen redan är negativt
      return bruttoValue.toLocaleString("sv-SE") + " kr";
    },
  },
};
</script>

<style scoped>
table {
  font-size: 14px;
}
h1,
h2 {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
th {
  color: rgba(0, 0, 0, 0.5);
}
</style>
