<template>
  <div class="home">
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
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #58b256;
    }
    footer{
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: 1px solid red;
    }
  }
</style>



