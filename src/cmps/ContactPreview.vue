<script>
export default {
  props: ["contact"],
}
</script>

<template>
  <section class="contact-info flex column">
    <h4>{{ contact.name }}</h4>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/helpers";

.contact-info {
  gap: 5px;
  margin-block-end: 10px;
}
</style>