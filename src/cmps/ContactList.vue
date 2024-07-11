<script>
import ContactPreview from "./ContactPreview.vue";

export default {
  props: ["contacts"],
  methods: {
    onRemove(contactId) {
      this.$emit("onRemove", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<template>
  <ul class="contact-list grid">
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact"/>
      <section class="actions flex justify-evenly">
        <button class="remove-btn" @click="onRemove(contact._id)">Remove</button>
        <RouterLink :to="`/contact/${contact._id}`"
          ><button class="details-btn">Details</button></RouterLink
        >
      </section>
    </li>
  </ul>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.contact-list {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  list-style: none;
  gap: 10px;

  li {
    background-color: $contacts-bgc;
    border-radius: 10px;
    padding: 15px 20px;

    button {
      background-color: $header-footer-bgc;

      &:hover {
        background-color: $header-footer-bgc-hover;
      }
    }
  }
}
</style>