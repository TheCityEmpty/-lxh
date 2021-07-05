import Vue from 'vue'
import Debug from './debug.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Debug),
}).$mount('#debug')
