<script>
import { userService } from "@/services/user.service.js"
import { bitcoinService } from "@/services/bitcoin.service.js"

export default {
  data() {
    return {
      user: null,
      bitRate: null,
    }
  },
  async created() {
    try { 
      this.user = await userService.getUser()
      this.bitRate = await bitcoinService.getRate(this.user.balance) }
    catch (err) { console.log(err) }
  }
}
</script>

<template>
  <section v-if="user" class="home-page grid">
    <fieldset class="user-info">
      <legend>User Information</legend>
      <p><span>Name: </span>{{ user.name }}</p>
      <p><span>Balance: </span>{{ user.balance }}</p>
    </fieldset>
    <fieldset class="bitcoin-info">
      <legend>Current Bitcoin Rate</legend>
      <p v-if="bitRate"><span>Rate: </span>{{ bitRate }}</p>
      <p v-else>Loading rate...</p>
    </fieldset>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/helpers";
@import "../assets/style/basics/vars";

.home-page {
  padding: 1rem 1.5rem;

  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  fieldset {
    padding: 0.25rem 1.5rem 1rem;
    border-radius: $fieldset-borders;

    legend {
      font-size: 1.25rem;
    }

    p:first-of-type {
      margin-block: 8px 15px;
    }
  }
}

@media (width > 742px) {
  .home-page {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
}
</style>