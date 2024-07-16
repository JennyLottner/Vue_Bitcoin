<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  props: ['statistics'],

  data() {
    return {
      chartData: {
        labels: this.statistics.dates,
        datasets: [
          {
            backgroundColor: 'rgb(87, 210, 251)',
            borderColor: 'rgb(87, 210, 251)',
            data: this.statistics.prices,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        plugins: {
          legend: {
            display: false
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
      },
    }
  },

  components: {
    Line,
  },
}
</script>

<template>
  <div class="chart-container">
    <div v-if="!chartData.datasets[0].data || !chartData.labels">
      loading chart...
    </div>
    <Line v-else :data="chartData" :options="chartOptions" />
  </div>
</template>

<style lang="scss">
.chart-container {
  height: 200px;
}
</style>
  