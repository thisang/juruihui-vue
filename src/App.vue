<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: null
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('App.vue => watch => $route.from', from)
      if (from.name === 'Login') {
        this.transitionName = 'login'
      } else {
        this.transitionName = ''
      }
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
  .login-enter{
    opacity: 0;
    transform: scale(1.5);
  }
  .login-enter-active{
    transition: all .5s ease-out .5s;
  }
  .login-enter-to{
    opacity: 1;
    transform: scale(1);
  }
  .login-leave{
    opacity: 1;
  }
  .login-leave-active{
    transition: all .5s ease-out;
  }
  .login-leave-to{
    opacity: 0;
    transform: scale(.5);
  }

</style>
