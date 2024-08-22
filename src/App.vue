<script>
import AppHeader from "./cmps/AppHeader.vue"
import AppFooter from "./cmps/AppFooter.vue"
import UserMsg from "./cmps/UserMsg.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  },
}
</script>

<template>
  <AppHeader />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <UserMsg />
  <AppFooter />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.slide-enter-active,
.slide-leave-active {
  opacity: 1;
  transition: transform 0.5s, opacity 0.5s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-75%) rotate(45deg);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(75%) rotate(-45deg);
}
</style>