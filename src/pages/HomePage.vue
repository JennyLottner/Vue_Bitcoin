<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";

export default {
  data() { return {
      user: userService.getUser(),
      bitRate: null,
    }},
    async created() {
      // try{ this.bitRate = await bitcoinService.getRate(this.user.balance)}
      try{ this.bitRate = 0.00172717}
      catch(err) {console.log(err)}
    }
}
</script>

<template>
  <section class="home-page grid">
    <fieldset class="user-info">
      <legend>User Information</legend>
      <p>Name: <span>{{ user.name }}</span></p>
      <p>Balance: <span>{{ user.balance }}</span></p>
    </fieldset>
    <fieldset class="bitcoin-info">
      <legend>Current Bitcoin Rate</legend>
      <p v-if="bitRate">Rate: <span>{{ bitRate }}</span></p>
      <p v-else>Loading rate...</p>
    </fieldset>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/helpers";

.home-page {
  grid-template-columns: repeat(2, 1fr);
  
  fieldset {
    margin: 20px 15px;
    padding: 5px 15px 10px;
  }
}
</style>