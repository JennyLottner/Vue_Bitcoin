<script>
import ContactPreview from "./ContactPreview.vue"

export default {
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
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
  <TransitionGroup v-if="contacts" class="contact-list grid" name="list" tag="ul">
    <li v-for="contact in contacts" :key="contact._id" class="flex justify-between">
      <ContactPreview :contact="contact" />

      <section class="actions flex column justify-evenly">
        <RouterLink :to="`/contact/${contact._id}`"><button class="details-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg></button></RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`" class="edit-btn"><button class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg></button></RouterLink>
        <button class="remove-btn" @click="onRemove(contact._id)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>
      </section>
    </li>
  </TransitionGroup>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";
@import "../assets/style/basics/typography";

.contact-list {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  list-style: none;
  gap: 10px;

  li {
    gap: 10px;

    background-color: $contacts-bgc;
    border-radius: 1rem;
    padding: 0.95rem 1.25rem;
    max-height: 180px;

    button {
      background-color: $header-footer-bgc;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: $header-footer-bgc-hover;
      }

      svg {
        width: 0.85rem;
        height: 0.85rem;
      }

      // &.details-btn::before {
      //   content: "\f06e";
      //   font-family: fa-solid;
      // }

      // &.edit-btn::before {
      //   content: "\f303";
      //   font-family: fa-solid;
      // }

      // &.remove-btn::before {
      //   content: "\f2ed";
      //   font-family: fa-solid;
      // }
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