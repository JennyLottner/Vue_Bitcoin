<template>
  <header class="app-header flex align-center justify-between">
    <h1>Mr. Bitcoin</h1>

    <nav class="flex align-center justify-between">
      <RouterLink to="/"><button>Home</button></RouterLink>
      <RouterLink to="/contact"><button>Contacts</button></RouterLink>
      <RouterLink to="/stats"><button>Stats</button></RouterLink>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "../assets/style/basics/vars";

.app-header {
  padding: 10px;
  background-color: $header-footer-bgc;

  nav {
    gap: 10px;

    button {
      padding: 4px 10px;

      &:hover {
        background-color: $header-footer-bgc-hover;
      }

      a.router-link-exact-active {
        color: $blue-text;
      }
    }
  }
}
</style>