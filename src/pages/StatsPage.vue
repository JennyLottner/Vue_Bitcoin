<script>
// import LineChart from '@/cmps/LineChart.vue'

export default {
  components: {
    // LineChart
  },
};
</script>

<template>
  <section class="stats-page flex column">
    <h1>Statistics</h1>
    <!-- <LineChart /> -->
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/helpers";
@import "../assets/style/basics/vars";

.stats-page {
  padding: 10px 10px 20px;

  h1 {
    margin-block-start: 10px;
    align-self: center;
  }
}
</style>