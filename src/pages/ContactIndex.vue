<script>
import { contactService } from "@/services/contactService.js"
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service'

import ContactList from "@/cmps/ContactList.vue"
import ContactFilter from "@/cmps/ContactFilter.vue"

export default {
  data() {
    return {
      contacts: null  // local contacts
    }
  },

  methods: {
    async loadContacts(filterBy = null) {
      try {
        this.contacts = await contactService.query(filterBy)  // local contacts
        // this.$store.dispatch('loadContacts', filterBy)  // global contacts
      } catch (err) { console.log(err) }
    },

    async onRemove(contactId) {
      try {
        await contactService.remove(contactId)  // local contacts
        // this.$store.dispatch('remove', contactId)  // global contacts

        const idx = this.contacts.findIndex(contact => contact._id === contactId)
        this.contacts.splice(idx, 1)

        showSuccessMsg(`Contact deleted`)
      } catch (err) {
        showErrorMsg(`Couldn't delete contact`)
      }
    },
  },

  computed: {
    // contacts() { return this.$store.getters.contacts }  // global contacts
  },

  async created() {
    await this.loadContacts()
  },

  components: {
    ContactFilter,
    ContactList,
  },
}
</script>

<template>
  <section class="contacts flex column">
    <header class="flex center">
      <RouterLink to="/contact/edit">
        <button class="add-btn">Add contact</button>
      </RouterLink>
      <h1>Contacts</h1>
    </header>

    <ContactFilter @loadContacts="loadContacts" />

    <ContactList @onRemove="onRemove" :contacts="contacts" />
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";
@import "../assets/style/basics/mixins";

.contacts {
  padding: 1.5rem;
  gap: 0.5rem;

  header {
    position: relative;

    .add-btn {
      @include cornerBtn;
    }
  }
}
</style>