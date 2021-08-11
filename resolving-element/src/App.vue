<template>
  <div id="app">
    <transition name="scale-slide">
      <router-view class="wrap"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeRouteEnter(to, from, next) {
    console.log('cc')
    console.log(to ,from)
    // next(vm => {
    //   console.log(vm)
    // })
  },
   beforeRouteUpdate(to, from, next) {
      console.log('a')
    console.log(to ,from)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
      console.log('bb')
    console.log(to ,from)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
}
</script>

<style lang="less"> 
* {margin: 0;padding: 0;}
html, body {
  overflow: hidden;
}
#app, .wrap  {
  width: 100%;
  min-height: 100vh;
}
.scale-slide-enter-active,
.scale-slide-leave-active{
  position: absolute;
  transition: all 0.85s ease;
}
.scale-slide-enter-active {
  right: -100%;
}
.scale-slide-leave-active {
  // transform: scale(1);    
}
.scale-slide-enter-to {
  right: 0;
}
.scale-slide-leave-to {
  // transform: scale(0.8);
}
</style>

