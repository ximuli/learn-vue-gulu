import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row', Row)
Vue.component('l-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
    msg: 'Hello, world!'
  },
  methods: {}
})