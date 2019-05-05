<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "GuluTabsItem",
    data() {
			return {
				active: false
      }
    },
    props: {
			disabled: {
				type: Boolean,
        default: false
      },
      name: {
				type: String | Number,
        required: true
      }
    },
    inject: ['eventBus'],
    computed: {
			classes() {
				return {
					active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => { // 在同一个事件中心上监听此事件
	      this.active = name === this.name
      })
    },
    methods: {
			xxx () {
				this.eventBus.$emit('update:selected', this.name) // 在事件中心 emit 一个事件
      }
    }
	}
</script>

<style lang="scss" scoped>
  .tabs-item {
    padding: 0 1em;
    flex-shrink: 0;
    &.active {
      background-color: red;
    }
  }
</style>