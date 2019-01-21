<template>
  <button class="l-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // props: ['icon', 'icon-position']
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-button {
  font-size: var(--font-size); height: var(--button-height); padding: 0 1em;
  border-radius: var(--border-radius); border: 1px solid var(--border-color);
  background: var(--button-bg); vertical-align: middle;
  display: inline-flex; justify-content: center; align-items: center;
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon { order: 1; margin-right: .2em; }
  > .content { order: 2; }
  &.icon-right {
    > .icon { order: 2; margin-right: 0; margin-left: .2em;}
    > .content { order: 1; }
  }
}
</style>
