<script>
import { eventBusService } from '@/services/eventBus.service.js'

export default {
	data() {
		return {
			msg: { txt: '', type: 'success', timeout: 1500 },
		}
	},
	methods: {
		showMsg(msg) {
			this.msg = msg
			setTimeout(() => (this.msg.txt = ''), this.msg.timeout || 1500)
		},
	},
	created() {
		eventBusService.on('show-user-msg', this.showMsg)
	},
}
</script>

<template>
    <Transition>
        <section v-if="msg.txt" class="user-msg">
            <p :class="msg.type">{{ msg.txt }}</p>
        </section>
    </Transition>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
	transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    translate: 200%;
	opacity: 0;
}

.user-msg {
	position: absolute;
	bottom: 20px;
	right: 20px;

	p {
		padding: 10px;
		border-radius: 10px;
	}
}

.success {
	background-color: lightgreen;
}

.error {
	background-color: orangered;
}
</style>
