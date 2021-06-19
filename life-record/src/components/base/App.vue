<template>
  <Leftbar />
  <div class="warp">
    <router-view class="container" />
  </div>
</template>

<script>
  import Leftbar from './left-bar.vue'
  export default {
    components: {
      Leftbar
    }
  }
</script>

<style lang="less" scoped>
  .warp {
    padding-left: 220px;
    padding-top: 64px;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
