<template>
  <div class="home">
    <x-header title="聚瑞会"></x-header>
    <header>聚蕊烩</header>
    <router-view></router-view>
    <footer>
      footer
    </footer>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  }
}
</script>
<style lang="scss" scoped>
  .home{
    header{
      height: 40px;
      padding: 3px 0;
      font-size: 18px;
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #eb8256;
    }
    footer{
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: 1px solid red;
    }
  }
</style>



