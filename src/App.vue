<script>
import AppHeader from "./cmps/AppHeader.vue"
import AppFooter from "./cmps/AppFooter.vue"

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>