<template>
  <footer class="app-footer flex center">
    <p>Vue site by <button><RouterLink to="/about">©Jenny Tover</RouterLink></button></p>
  </footer>
</template>

<script>
</script>

<style lang="scss">
@import "../assets/style/basics/vars";

.app-footer {
  padding: 10px;
  background-color: $header-footer-bgc;

  p {
    color: $blue-text;

    button {
      color: $blue-text;
      padding: 2px 5px;

      &:hover {
        background-color: $header-footer-bgc-hover;
      }
    }
  }
}
</style>