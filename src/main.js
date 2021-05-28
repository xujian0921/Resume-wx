import Vue from 'vue'
import App from './App'
import * as filters from './filters'

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
