<template>
  <div class="persional-information">
    <x-header title="个人资料"></x-header>
    <div class="persional-information-container">
      <group>
        <cell title="头像" is-link>
          <img class="avatar" slot="child" src="../../../static/images/ang.jpg">
        </cell>
        <cell title="昵称" is-link value="thisang"></cell>
        <cell title="性别" is-link value="男"></cell>
        <cell title="生日" is-link value="2017年12月16日"></cell>
        <cell title="地区" is-link value="广州"></cell>
      </group>
    </div>
  </div>
</template>
<script>
import { XHeader, Group, Cell } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell
  }
}
</script>
<style lang="scss" scoped>
  .persional-information{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .persional-information-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
    .avatar{
      width: 25px;
      height: 25px;
      position: absolute;
      right: 30px;
      border-radius: 50%;
    }
  }
</style>
