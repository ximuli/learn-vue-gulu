<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['left', 'top', 'right', 'bottom'].indexOf(value) !== -1
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) !== -1
      }
    }
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.$refs.popover) {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    }
  },
  computed: {
    openEvent() {
      return this.trigger === 'click' ? 'click' : 'mouseenter'
    },
    closeEvent() {
      return this.trigger === 'click' ? 'click' : 'mouseleave'
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const { width, height, top, bottom, left, right } = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
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
      if (this.$refs.triggerWrapper.contains(e.target)) {
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
@import './../var.scss';

.popover {
  display: inline-block; vertical-align: top; position: relative;
}
.content-wrapper {
  position: absolute; border: 1px solid $color; border-radius: $border-radius; padding: 0.5em 1em;
  max-width: 20em; word-break: break-all;
  // box-shadow: 0 0 3px #333; 使用这个并不能使小三角也带阴影
  filter: drop-shadow(0 1px 2px #333); background-color: #fff; // 这两项配合可以使小三角也带阴影
  &::before,&::after {
    content: ''; display: block; width: 0; height: 0; border: 10px solid transparent; position: absolute;
  }
  &.position-top {
    transform: translateY(-100%); margin-top: -10px;
    &::before,&::after {
      left: 10px; border-bottom: none;
    }
    &::before {
      border-top-color: $color; top: 100%;
    }
    &::after {
      border-top-color: white; top: calc(100% - 1px); 
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,&::after {
      left: 10px; border-top: none;
    }
    &::before {
      border-bottom-color: $color; bottom: 100%;
    }
    &::after {
      border-bottom-color: white; bottom: calc(100% - 1px); 
    }
  }
  &.position-left {
    transform: translateX(-100%); margin-left: -10px;
    &::before,&::after {
      top: 50%; transform: translateY(-50%); border-right: none;
    }
    &::before {
      left: 100%; border-left-color: $color;
    }
    &::after {
      left: calc(100% - 1px); border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      top: 50%; transform: translateY(-50%); border-left: none;
    }
    &::before {
      border-right-color: $color; right: 100%;
    }
    &::after {
      border-right-color: white; right: calc(100% - 1px);
    }
  }
}
</style>
