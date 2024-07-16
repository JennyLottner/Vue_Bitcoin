import { createStore } from "vuex"

import contacts from './modules/contacts.js'

export default createStore({
    modules: {
        contacts,
    }
})