<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-box">
        <div class="tab">
          <div>个人登陆</div>
          <div>商家登陆</div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入手机号码/邮箱">
          <input type="password" placeholder="请输入密码">
          <x-button type="primary">登陆</x-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  }
}
</script>
<style lang="scss" scoped>
  @mixin full {
    width: 100%;
    height: 100%;
  }
  .login{
    @include full;
    .login-bg{
      @include full;
      background: linear-gradient(#ffe5e5, #fffcf1);
    }
  }
</style>
