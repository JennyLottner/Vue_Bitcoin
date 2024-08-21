<script>
import { bitcoinService } from '@/services/bitcoin.service'

import LineChart from '@/cmps/LineChart.vue'
import BarChart from '@/cmps/BarChart.vue'

export default {
  data() {
    return {
      marketHistory: null,
      avgBlockSize: null,

      displayChart: {
        dataType: 'market',
        chartType: 'line',
      },
    }
  },
  methods: {},
  async created() {
    try {
      this.marketHistory = await bitcoinService.getMarketPriceHistory()
      this.avgBlockSize = await bitcoinService.getAvgBlockSize()
    } catch (err) {
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
    <nav class="flex align-center justify-between">
      <div class="data-type flex">
        <button @click="displayChart.dataType = 'market'" :class="displayChart.dataType === 'market'? 'selected' : ''">Market history</button>
        <button @click="displayChart.dataType = 'block'" :class="displayChart.dataType === 'block'? 'selected' : ''">Average block size</button>
      </div>

      <div class="chart-type flex">
        <div class="line">
          <input type="radio" id="line" name="chartType" value="line" v-model="displayChart.chartType" />
          <label for="line">Line chart</label>
        </div>
        <div class="bar">
          <input type="radio" id="bar" name="chartType" value="bar" v-model="displayChart.chartType"/>
          <label for="bar">Bar chart</label>
        </div>
      </div>
    </nav>

    <h2>{{ displayChart.dataType === 'market' ? 'Market history' : 'Average block size' }}</h2>

    <section v-if="marketHistory && avgBlockSize" class="chart-display">
      <LineChart v-if="displayChart.chartType === 'line' && displayChart.dataType === 'market'" :statistics="marketHistory"/>
      <LineChart v-if="displayChart.chartType === 'line' && displayChart.dataType === 'block'" :statistics="avgBlockSize"/>
      <BarChart v-if="displayChart.chartType === 'bar' && displayChart.dataType === 'market'" :statistics="marketHistory"/>
      <BarChart v-if="displayChart.chartType === 'bar' && displayChart.dataType === 'block'" :statistics="avgBlockSize"/>
    </section>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/helpers";
@import "../assets/style/basics/vars";

.stats-page {
  padding: 1rem 1.5rem;

  h1 {
    margin-block-start: 10px;
    align-self: center;
    letter-spacing: 0.5px;
  }

  nav {
    align-self: center;

    width: 50%;
    min-width: 300px;
    max-width: 1000px;
    background-color: $contacts-bgc;
    padding: 0.5rem 1rem;  
    border-radius: 10px;
    margin-block: 0.75rem;

    .data-type,
    .chart-type {
      gap: 0.5rem;
    }

    .selected {
      background-color: $header-footer-bgc;
    }
  }

  h2 {
    align-self: center;
    font-size: 1.4rem;
    color: $header-footer-bgc-hover;
  }

  .chart-container {
    margin-block-end: 2rem;
  }
}
</style>