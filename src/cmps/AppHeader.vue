<template>
  <header class="app-header flex align-center justify-between">
    <h1>Mr. Bitcoin</h1>

    <nav class="flex align-center justify-between">
      <button><RouterLink to="/">Home</RouterLink></button>
      <button><RouterLink to="/contacts">Contacts</RouterLink></button>
      <button><RouterLink to="/stats">Stats</RouterLink></button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/style/basics/vars';

.app-header {
  padding: 10px;
  background-color: $header-footer-bgc;

  nav {
    gap: 10px;

    button {
      padding: 4px 10px;
      border-radius: 20px;
      border: none;

      &:hover {
        background-color:$header-footer-bgc-hover;
      }

      a.router-link-exact-active {
        color: $blue-text;
      }
    }
  }
}
</style>