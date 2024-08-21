<script>
import ContactPreview from "./ContactPreview.vue"

export default {
  props: ["contacts"],
  methods: {
    onRemove(contactId) {
      this.$emit("onRemove", contactId)
    },
  },
  components: {
    ContactPreview,
  },
}
</script>

<template>
  <TransitionGroup class="contact-list grid" name="list" tag="ul">
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
      <section class="actions flex justify-evenly">
        <button class="remove-btn" @click="onRemove(contact._id)">
          Remove
        </button>
        <RouterLink :to="`/contact/${contact._id}`"
          ><button class="details-btn">Details</button></RouterLink
        >
        <RouterLink :to="`/contact/edit/${contact._id}`"
          ><button class="edit-btn">Edit</button></RouterLink
        >
      </section>
    </li>
  </TransitionGroup>
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
    border-radius: $fieldset-borders;
    padding: 0.95rem 1.25rem;
    max-height: 180px;

    button {
      background-color: $header-footer-bgc;
      padding: 3px 8px;

      &:hover {
        background-color: $header-footer-bgc-hover;
      }
    }
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter-from,
  .list-leave-to {
    scale: 0.2;
    opacity: 0;
    rotate: 360deg;
  }
}
</style>