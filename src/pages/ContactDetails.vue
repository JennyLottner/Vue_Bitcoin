<script>
import { contactService } from "@/services/contactService"

export default {
  data() {
    return {
      contactId: this.$route.params.id,
      contact: null,
    }
  },
  async created() {
    try {
      this.contact = await contactService.getById(this.contactId)
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<template>
  <p v-if="!contact">loading</p>
  <section v-else class="details-page flex column align-center">
    <header class="flex center">
      <RouterLink to="/contact">
        <button class="back-btn">Back</button>
      </RouterLink>
      <h1>Contact Details</h1>
    </header>

    <div class="contact flex column">
      <h2>{{ contact.name }}</h2>
      <img
        :src="`https://robohash.org/${contact.name}.png?size=200x200`"
        alt="Robot Image"
      />
      <p><span>Phone:</span> {{ contact.phone }}</p>
      <p><span>Email:</span> {{ contact.email }}</p>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.details-page {
  padding: 1rem 2rem;

  header {
    position: relative;
    width: 100%;

    .back-btn {
      position: absolute;
      padding: 0.4rem 0.8rem;
      inset: 0 auto auto 0;
      background-color: $contacts-bgc;

      &:hover {
        background-color: $header-footer-bgc;
      }
    }
  }

  .contact {
    gap: 10px;
    padding: 10px 30px 20px;
    margin-block-start: 20px;
    border-radius: 20px;
    background-color: $contacts-bgc;
    min-width: 300px;

    h2 {
      align-self: center;
    }

    img {
      border-radius: 50% 50% 20px 20px;
      background-color: $header-footer-bgc;
    }

    span {
      font-weight: bold;
    }
  }
}
</style>