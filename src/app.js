import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: true,
    loading3: true
  }
})