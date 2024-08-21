<script>
export default {
  props: ["contact"],
}
</script>

<template>
  <section class="contact-info flex align-center justify-between">
    <h4>{{ contact.name }}</h4>
    <img :src="`https://robohash.org/${contact.name}.png?size=200x200`" alt="Robot Image"/>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.contact-info {
  gap: 5px;
  margin-block-end: 10px;
  width: 100%;
  height: calc(100% - 40px);

  img {
    border-radius: 40% 10px 40% 10px;
    background-color: $img-bgc;
    max-width: 50%;
    max-height: 100%;
  }
}
</style>