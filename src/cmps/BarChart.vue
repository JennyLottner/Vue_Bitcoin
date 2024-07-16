<script>
import { Bar } from "vue-chartjs"
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  props: ['statistics'],

  data() {
    return {
      data: {
        labels: this.statistics.dates,
        datasets: [
          {
            backgroundColor: 'rgb(87, 210, 251, 0.8)',
            data: this.statistics.prices
          }
        ]
      },
      options: {
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
      }
    }
  },

  components: {
    Bar,
  },
}
</script>

<template>
  <div class="chart-container">
    <Bar :data="data" :options="options" />
  </div>
</template>

<style lang="scss">
.chart-container {
  height: 200px;
}
</style>
  