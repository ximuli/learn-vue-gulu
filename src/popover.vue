<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-show="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="trigger">
      <slot></slot> 
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    console.log(this.$refs.trigger.getBoundingClientRect())
    console.log(this.$refs.contentWrapper)
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          // this.$refs.trigger.getBoundingClientRect()
          let { width, height, top, bottom, left, right } = this.$refs.trigger.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          let eventHandler = () => {
            this.visible = false
            console.log('删除')
            document.removeEventListener('click', eventHandler)
          }
          console.log('新增')
          document.addEventListener('click', eventHandler)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block; vertical-align: top; position: relative;
}
.content-wrapper {
  position: absolute; border: 1px solid red; box-shadow: 0 0 3px #333; transform: translateY(-100%);
}
</style>
