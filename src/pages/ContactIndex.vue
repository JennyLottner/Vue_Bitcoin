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
      try {
        const idx = this.contacts.findIndex((contact) => contact._id === contactId)
        this.contacts.splice(idx, 1) // remove from state
        await contactService.removeContact(contactId); // remove from DB
        console.log(`contact ${contactId} was removed`);
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
    ContactFilter
  },
};
</script>

<template>
  <section class="contacts flex column">
    <h1>Contacts</h1>
    <ContactFilter @loadContacts="loadContacts" />
    <ContactList @onRemove="onRemove" :contacts = "contacts" />
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.contacts {
  padding: 10px 10px 20px;

  h1 {
    align-self: center;
  }
}
</style>