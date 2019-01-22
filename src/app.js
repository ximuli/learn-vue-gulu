import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: true,
    loading3: true
  }
})