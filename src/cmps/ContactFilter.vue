<script>
import { utilService } from '@/services/util.service'

export default {
  data() {
    return {
      filterBy: null,
    }
  },

  methods: {
    onSearch() {
      utilService.debounce(() => {
        this.$emit("loadContacts", this.filterBy);
      }, 300).call(this);
    }
  },

}
</script>

<template>
  <fieldset class="contacts-filter">
    <legend>Filter</legend>
    <input type="text" @input="onSearch" v-model="filterBy" />
  </fieldset>
</template>

<style lang="scss">
.contacts-filter {
  margin-block: 10px 20px;
  padding-block: 0;
}
</style>