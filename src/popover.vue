<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="trigger" style="display: inline-block;">
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
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      // this.$refs.trigger.getBoundingClientRect()
      let { width, height, top, bottom, left, right } = this.$refs.trigger.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {return}
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) {return}
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(e) {
      if (this.$refs.trigger.contains(e.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block; vertical-align: top; position: relative;
}
.content-wrapper {
  position: absolute; border: 1px solid $border-color; border-radius: $border-radius; padding: 0.5em 1em;
  transform: translateY(-100%); margin-top: -10px; max-width: 20em; word-break: all;
  // box-shadow: 0 0 3px #333; 使用这个并不能使小三角也带阴影
  filter: drop-shadow(0 1px 2px #333); background-color: #fff; // 这两项配合可以使小三角也带阴影
  &::before,&::after {
    content: ''; display: block; width: 0; height: 0; border: 10px solid transparent; position: absolute; left: 10px;
  }
  &::before {
     border-top-color: $border-color; top: 100%;
  }
  &::after {
    border-top-color: white; top: calc(100% - 1px); 
  }
}
</style>
