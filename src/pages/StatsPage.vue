<script>
import { bitcoinService } from '@/services/bitcoin.service'

import LineChart from '@/cmps/LineChart.vue'
import BarChart from '@/cmps/BarChart.vue'

export default {
  data() { return {
    marketHistory: null,
    avgBlockSize: null,
  }},

  methods: {},

  async created() {
    try {
      this.marketHistory = await bitcoinService.getMarketPriceHistory()
      this.avgBlockSize = await bitcoinService.getAvgBlockSize()
    } catch(err) {
      console.log(err)
    }
  },

  components: {
    LineChart,
    BarChart
  },
}
</script>

<template>
  <section class="stats-page flex column">
    <h1>Statistics</h1>
    <h2>Market History</h2>
    <LineChart v-if="marketHistory" :statistics="marketHistory"/>
    <BarChart v-if="marketHistory" :statistics="marketHistory"/>
    <h2>Average Block Size</h2>
    <LineChart v-if="avgBlockSize" :statistics="avgBlockSize"/>
    <BarChart v-if="avgBlockSize" :statistics="avgBlockSize"/>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/helpers";
@import "../assets/style/basics/vars";

.stats-page {
  padding: 1rem 2rem;

  .chart-container {
    margin-block-end: 2rem;
  }

  h1 {
    margin-block-start: 10px;
    align-self: center;
  }

  h2 {
    color: $header-footer-bgc-hover;
    margin-block-start: 10px;
    align-self: center;
  }
}
</style>