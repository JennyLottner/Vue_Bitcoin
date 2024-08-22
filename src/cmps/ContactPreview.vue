<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <section class="contact-info flex align-center">
    <img :src="`https://robohash.org/${contact.name}.png?size=200x200`" alt="Robot Image"/>
    <h4>{{ contact.name }}</h4>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.contact-info {
  gap: 10px;
  width: 100%;

  img {
    border-radius: 40% 10px 40% 10px;
    background-color: $img-bgc;
    max-width: 50%;
    max-height: 80px;
  }
}
</style>