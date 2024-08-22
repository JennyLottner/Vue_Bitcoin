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
  computed: {
    bitBalance() {
      return this.bitRate * this.user.balance
    },
  },
  async created() {
    try {
      this.user = await userService.getUser()
      this.bitRate = await bitcoinService.getRate()
    }
    catch (err) { console.log(err) }
  }
}
</script>

<template>
  <section v-if="user" class="home-page grid">
    <fieldset class="user-info">
      <legend>User Information</legend>
      <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>{{ user.name }}</p>
      <p><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg></span>$ {{ user.balance }}</p>
    </fieldset>

    <fieldset class="bitcoin-info">
      <legend>Current Bitcoin Rate</legend>
      <p v-if="bitRate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-141.7-35.3c4.9-33-20.2-50.7-54.6-62.6l11.1-44.7-27.2-6.8-10.9 43.5c-7.2-1.8-14.5-3.5-21.8-5.1l10.9-43.8-27.2-6.8-11.2 44.7c-5.9-1.3-11.7-2.7-17.4-4.1l0-.1-37.5-9.4-7.2 29.1s20.2 4.6 19.8 4.9c11 2.8 13 10 12.7 15.8l-12.7 50.9c.8 .2 1.7 .5 2.8 .9-.9-.2-1.9-.5-2.9-.7l-17.8 71.3c-1.3 3.3-4.8 8.4-12.5 6.5 .3 .4-19.8-4.9-19.8-4.9l-13.5 31.1 35.4 8.8c6.6 1.7 13 3.4 19.4 5l-11.3 45.2 27.2 6.8 11.2-44.7a1038.2 1038.2 0 0 0 21.7 5.6l-11.1 44.5 27.2 6.8 11.3-45.1c46.4 8.8 81.3 5.2 96-36.7 11.8-33.8-.6-53.3-25-66 17.8-4.1 31.2-15.8 34.7-39.9zm-62.2 87.2c-8.4 33.8-65.3 15.5-83.8 10.9l14.9-59.9c18.4 4.6 77.6 13.7 68.8 49zm8.4-87.7c-7.7 30.7-55 15.1-70.4 11.3l13.5-54.3c15.4 3.8 64.8 11 56.8 43z"/></svg><span>rate:&nbsp;</span>{{ bitRate }}</p>
      <p v-if="bitRate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-6.3 0C18.7 448 0 429.3 0 406.3L0 288l0-22.3L0 224 0 101.6C0 80.8 16.8 64 37.6 64L48 64l0-32zM64 224l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128l0 96zm112 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z"/></svg><span>balance:&nbsp;</span>{{ bitBalance }}</p>
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

    p {
      display: flex;
      align-items: center;

      svg {
        height: 1rem;
        width: 1rem;
        margin-inline-end: 0.25rem;
      }
    }
    
    &.user-info {
      svg {
        margin-inline-end: 0.5rem;
      }
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