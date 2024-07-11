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
  grid-template-columns: repeat(2, 1fr);
  
  fieldset {
    margin: 20px 15px;
    padding: 10px 20px 20px;
    border-radius: 20px;
    border-color: $header-footer-bgc-hover;

    legend {
      color: $header-footer-bgc-hover;
      font-weight: bold;
    }

    span {
      font-weight: bold;
    }

    p:first-of-type {
      margin-block: 8px 15px;
    }
  }
}
</style>