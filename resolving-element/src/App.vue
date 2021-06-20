<template>
  <div id="app">
    <img alt="Vue logo" :src="logo">
    <span :class="css.b">1231231231231232</span>
    <span :class="$style.vv">奥术大师多</span>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import aCss from './assets/a.module.css'
import logo from '@/assets/logo.png'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      logo: ''
    }
  },

  computed: {
    css: () => aCss
  },

  created () {
    console.log(import.meta.env, 1, aCss)
    console.log(logo)
    // console.log(package)
    this.logo = logo
  }
}
</script>

<style module>
.vv {
  color: #f00;
  font-size: 20px;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ccc {
  color: #f00;
}
</style>
