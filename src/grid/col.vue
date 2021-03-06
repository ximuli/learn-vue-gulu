<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}

export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: { type: Object, validator },
    npc: { type: Object, validator },
    pc: { type: Object, validator },
    wpc: { type: Object, validator }
  },
  data() {
    return {
      gutter: 0
    }
  },
  methods: {
    createClass (obj, str = '') {
      if(!obj) {return []}
      let arr =[]
      if (obj.span) { arr.push(`col-${str}${obj.span}`) }
      if (obj.offset) { arr.push(`offset-${str}${obj.offset}`) }
      return arr
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, npc, pc, wpc} = this
      let createClass = this.createClass
      return [
        ...createClass({span, offset}),
        ...createClass(ipad, 'ipad-'),
        ...createClass(npc, 'npc-'),
        ...createClass(pc, 'pc-'),
        ...createClass(wpc, 'wpc-')
      ]
    },
    colStyle() {
      if (this.gutter) {
        return {
          marginLeft: this.gutter/2 + 'px',
          marginRight: this.gutter/2 + 'px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-npc-; // narrow pc
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-npc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 1201px)  {
    $class-prefix: col-wpc-; // wide pc
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-wpc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
}
</style>
