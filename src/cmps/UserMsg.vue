<script>
import { eventBus } from '@/services/eventBus.service.js'

export default {
  data() {
    return {
      msg: { txt: '', type: 'success' },
    }
  },
  methods: {
    showMsg(msg) {
      this.msg = msg
      setTimeout(() => this.msg.txt = '', 2000000)
    },
  },
  created() {
    this.unsubscribe = eventBus.on('user-msg', this.showMsg)
  },
  unmounted() { this.unsubscribe() },
}
</script>

<template>
  <Transition>
    <section v-if="msg.txt" class="user-msg" :class="msg.type">
      <p>{{ msg.txt }}</p>
    </section>
  </Transition>
</template>

<style lang="scss">
.user-msg {
  position: fixed;
  bottom: 40px;
  right: 20px;

  padding: 1rem;
  min-width: 200px;
  border-radius: 5px;
  
  &.success {
    background-color: rgb(24, 198, 125);
  }

  &.error {
    background-color: rgb(253, 122, 122);
  }
}

.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  translate: 200%;
  opacity: 0;
}
</style>
