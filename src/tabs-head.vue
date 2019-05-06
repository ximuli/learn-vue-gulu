<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "GuluTabsHead",
    inject: ['eventBus'],
    mounted() {
			this.eventBus.$on('update:selected', (item, vm) => {
        let { width, left } = vm.$el.getBoundingClientRect() // 获取元素的位置信息
        this.$refs.line.style.width = `${width}px`
				this.$refs.line.style.left = `${left}px`
      })
    }
	}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: #1890ff;
  .tabs-head {
    display: flex; height: $tab-height; justify-content: flex-start; position: relative;
    > .line {
      position: absolute; bottom: 0;
      border-bottom: 2px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto; // 这个写法可以使元素靠右
    }
  }
</style>