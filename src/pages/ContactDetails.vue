<script>
import { contactService } from '@/services/contactService';

export default {
data() { return {
    contactId: this.$route.params.id,
    contact: null
}},
async created() {
    try {
        this.contact = await contactService.getContactById(this.contactId)
    }
    catch(err) {console.log(err)}
},
}
</script>

<template>
    <p v-if="!contact">loading</p>
    <section v-else class="details-page flex column">
        <h1>Contact Details</h1>
        <div class="contact flex column">
            <h2>{{ contact.name }}</h2>
            <p><span>Phone:</span> {{ contact.phone }}</p>
            <p><span>Email:</span> {{ contact.email }}</p>
        </div>
    </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.details-page {
    padding: 10px;

    .contact {
        align-self: center;
        gap: 10px;
        padding: 20px 30px 30px;
        border-radius: 20px;
        background-color: $contacts-bgc;

        h2 {
            align-self: center;
        }

        span {
            font-weight: bold;
        }
    }
}
</style>