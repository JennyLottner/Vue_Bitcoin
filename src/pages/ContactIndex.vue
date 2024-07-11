<script>
import { contactService } from "@/services/contactService.js"
import ContactList from "@/cmps/ContactList.vue"

export default {
  data() {
    return {
      contacts: null,
      filterBy: null,
    };
  },

  methods: {
    async loadContacts() {
      try {
        this.contacts = await contactService.getContacts(this.filterBy)
        console.log(this.contacts)
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
  },
};
</script>

<template>
  <section class="contacts">
    <h1>contacts</h1>
    <ContactList @onRemove="onRemove" :contacts = "contacts" />
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.contacts {
  padding: 10px 10px 20px;

  h1 {
    margin-block-end: 20px;
  }
}
</style>