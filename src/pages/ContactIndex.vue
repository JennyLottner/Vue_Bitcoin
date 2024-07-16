<script>
import { contactService } from "@/services/contactService.js"

import ContactList from "@/cmps/ContactList.vue"
import ContactFilter from "@/cmps/ContactFilter.vue"

export default {
  data() {
    return {
      contacts: null,
    }
  },

  methods: {
    async loadContacts(filterBy = null) {
      try {
        this.contacts = await contactService.getContacts(filterBy)
      } catch (err) {
        console.log(err)
      }
    },

    async onRemove(contactId) {
      try {   // supposed to be the other way but then they remove 2 instead of 1...
        const idx = this.contacts.findIndex(contact => contact._id === contactId)
        this.contacts.splice(idx, 1) // remove from state
        await contactService.removeContact(contactId) // remove from DB
      } catch (err) {
        console.log(err)
      }
    },
  },

  async created() {
    this.loadContacts()
  },

  components: {
    ContactList,
    ContactFilter,
  },
}
</script>

<template>
  <section class="contacts flex column">
    <RouterLink to="/contact/edit"
      ><button class="add-btn">Add contact</button></RouterLink
    >
    <h1>Contacts</h1>
    <ContactFilter @loadContacts="loadContacts" />
    <ContactList @onRemove="onRemove" :contacts="contacts" />
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.contacts {
  position: relative;
  padding: 10px 10px 20px;

  h1 {
    margin-block-start: 10px;
    align-self: center;
  }

  .add-btn {
    position: absolute;
    inset: 20px auto auto 20px;
    background-color: $contacts-bgc;

    &:hover {
      background-color: $header-footer-bgc;
    }
  }
}
</style>