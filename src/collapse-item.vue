<template>
  <div class="collapse-item">
    <div class="title" @click="toggleStatus">
      {{title}}
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      if (name !== this.name) {
        this.onClose()
      } else {
        this.onShow()
      }
    })
  },
  methods: {
    toggleStatus() {
      if (this.isOpen) {
        this.isOpen = false
      } else {
        this.eventBus && this.eventBus.$emit('update:selected', this.name)
      }
    },
    onClose() {
      this.isOpen = false
    },
    onShow() {
      this.isOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px; min-height: 32px;
    display: flex; align-items: center; padding: 0px 8px; 
  }
  > .content {
    padding: 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius; border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child { // 当 title 是最后一个 collapse-item 的最后一个子元素时，即最后一个 collapse-item 没有内容
      border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
