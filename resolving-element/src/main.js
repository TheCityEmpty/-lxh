import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
const modules = import.meta.globEager('./directives/*.js')
console.log(modules)
// import package from './p.json'
// console.log(package)

new Vue({
  render: h => h(App),
}).$mount('#app')
