import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Layout from './layout'
import Toast from './toast'
import plugin from './plugin'

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row', Row)
Vue.component('l-col', Col)
Vue.component('l-header', Header)
Vue.component('l-content', Content)
Vue.component('l-footer', Footer)
Vue.component('l-sider', Sider)
Vue.component('l-layout', Layout)
Vue.component('l-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
    msg: 'Hello, world!'
  },
  created() {
    
  },
  methods: {
    showToast() {
      this.$toast('很多文字', {
        enableHtml: true,
        closeButton: {
          text: '知道啦',
          callback(toast) { // toast 是从toast组件中传过来的
            toast.log()
            console.log('用户说他知道了')
          }
        }
      })
    }
  }
})