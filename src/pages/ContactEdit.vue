<script>
import { contactService } from "@/services/contactService.js"
import { showErrorMsg, showSuccessMsg } from '@/services/event-bus.service'

export default {
  data() {
    return {
      contact: null,
    }
  },

  methods: {
    async onSave() {
      try {
        await contactService.saveContact(this.contact)
        this.$router.push('/contact')
        showSuccessMsg('contact saved')
      } catch (err) {
        showErrorMsg(`couldn't save contact`)
      }
    }
  },

  async created() {
    try {
      const contactId = this.$route.params._id
      this.contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<template>
  <section class="edit-page flex column">
    <RouterLink to="/contact"
      ><button class="back-btn">Back</button></RouterLink
    >
    <h1>Edit Contact</h1>

    <div v-if="!contact">loading...</div>
    <form v-else @submit.prevent="onSave" class="flex column align-center">
      <fieldset class="name">
        <legend>Name</legend>
        <input name="name" id="name" type="text" v-model="contact.name" />
      </fieldset>

      <fieldset class="email">
        <legend>Email</legend>
        <input name="email" id="email" type="text" v-model="contact.email" />
      </fieldset>

      <fieldset class="phone">
        <legend>Phone</legend>
        <input name="phone" id="phone" type="tel" v-model="contact.phone" />
      </fieldset>

      <div class="actions flex justify-around">
        <RouterLink to="/contact"><button>Cancel</button></RouterLink>
        <button>Save</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.edit-page {
  padding: 10px;
  position: relative;

  h1 {
    margin-block-start: 10px;
    align-self: center;
  }

  .back-btn {
    position: absolute;
    inset: 20px auto auto 20px;
    background-color: $contacts-bgc;

    &:hover {
      background-color: $header-footer-bgc;
    }
  }

  form {
    fieldset {
      width: auto;
      padding-block: 0;
      margin-block: 6px;
    }

    .actions {
      width: auto;
      gap: 20px;
    }

    button {
      background-color: $contacts-bgc;
      margin-block: 10px;
      padding: 5px 10px;
      align-self: center;
      font-size: 1em;

      &:hover {
        background-color: $header-footer-bgc;
      }
    }
  }
}

@media (width > 500px) {
  .edit-page form fieldset,
  .edit-page form .actions {
    width: 50%;
  }
}

@media (width > 1000px) {
  .edit-page form fieldset,
  .edit-page form .actions {
    width: 35%;
  }
}
</style>