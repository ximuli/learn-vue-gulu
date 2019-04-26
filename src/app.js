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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

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
Vue.component('l-tabs', Tabs)
Vue.component('l-tabs-head', TabsHead)
Vue.component('l-tabs-item', TabsItem)
Vue.component('l-tabs-body', TabsBody)
Vue.component('l-tabs-pane', TabsPane)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectedTab: 'sports',
    loading1: true,
    loading2: false,
    loading3: false,
    msg: 'Hello, world!'
  },
  created() {
    
  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`您的智商余额为${parseInt(Math.random()*100)}，请充值`, {
        position,
        enableHtml: false,
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