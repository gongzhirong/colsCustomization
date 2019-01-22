import Vue from 'vue'
import App from './App.vue'
import { Poptip, Button, Icon, Checkbox, Table, Page } from 'iview'
Vue.component('Poptip', Poptip)
Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('Checkbox', Checkbox)
Vue.component('Table', Table)
Vue.component('Page', Page)
new Vue({
  el: '#app',
  render: h => h(App)
})
