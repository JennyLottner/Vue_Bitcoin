<script>
export default {
    data() { return {
        filterBy: null,
    }},

    methods: {
        onSearch() {
            this.$emit('loadContacts', this.filterBy)
        },
    },

}
</script>

<template>
    <fieldset class="contacts-filter">
        <legend>Filter</legend>
        <input type="text" @input="onSearch" v-model="filterBy">
    </fieldset>
  
</template>

<style lang="scss">
.contacts-filter {
    margin-block: 10px 20px;
    padding-block: 0;

    input {
        width: 100%;
        padding: 10px 5px;
        border: none; 
        border-radius: 40px;
        outline: none;
    }
}

</style>