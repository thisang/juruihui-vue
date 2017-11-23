<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <x-header title="ddd"></x-header>
    <div class="test"></div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'app',
  components: {
    XHeader
  }
}
</script>
<style lang="less">
  // @import '~vux/src/style/reset.less';
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
