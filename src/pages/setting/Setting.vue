<template>
  <div class="setting">
    <x-header title="设置" :left-options="{backText: '我的'}"></x-header>
    <div class="setting-container">
      <group>
        <cell title="账号资料" is-link></cell>
      </group>
      <group>
        <cell title="消息通知设置" is-link></cell>
      </group>
      <group>
        <cell title="意见反馈" is-link></cell>
      </group>
      <group>
        <cell title="邀请好友使用" is-link></cell>
      </group>
      <group>
        <cell title="检查更新" is-link></cell>
      </group>
      <group>
        <cell title="关于聚蕊烩" is-link value="v1.0.0"></cell>
      </group>
      <group>
        <cell class="exit">
          <p class="login-out">退出登陆</p>
        </cell>
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
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .setting{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .setting-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
    .login-out{
      color: #eb8256;
    }
  }
</style>
<style lang="scss">
 .setting{
   .exit{
     .weui-cell__ft{
       text-align: center !important;
       width: 100% !important;
     }
   }
 }
</style>

