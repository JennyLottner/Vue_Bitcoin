import { contactService } from "@/services/contactService"

export default {
    strict: true,
    state() {
        return {
            contacts: [],
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        remove(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    getters: {
        contacts(state) { return state.contacts },
    },
    actions: {
        async loadContacts({ commit }, payload) {
            try {
                const contacts = (payload) ? await contactService.query(payload) : await contactService.query()
                commit('setContacts', { contacts })
            } catch (err) {
                console.log(err)
                throw `Couldn't load contacts`
            }
        },
        async remove({ commit }, contactId) {
            try {
                await contactService.remove(contactId)
                commit('remove', contactId)
            } catch (err) {
                console.log(err)
                throw `Couldn't remove contact`
            }
        }
    },
}