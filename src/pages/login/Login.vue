<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-box">
        <div class="tab">
          <div class="tab-active">个人登陆</div>
          <div>商家登陆</div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入手机号码/邮箱">
          <input type="password" placeholder="请输入密码">
          <x-button type="primary" class="jrh-primary-btn">登陆</x-button>
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
  $orange : #eb8256;
  @mixin full {
    width: 100%;
    height: 100%;
  }
  .login{
    @include full;
    .login-bg{
      @include full;
      background: linear-gradient(#ffe5e5, #fffcf1);
      .login-box{
        width: 80%;
        height: 300px;
        background-color: #fffcf1;
        border: 1px solid $orange;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 10%;
        box-shadow: (0 5px 10px -5px);
        .tab{
          width: 100%;
          height: 30px;
          color: $orange;
          font-size: 14px;
          text-align: center;
          display: flex;
          line-height: 30px;
          border-bottom: 1px solid $orange;
          div{
            flex: 1;
          }
        }
        .tab-active{
          background-color: $orange;
          color: #fff;
        }
        .input{
          padding: 10px;
          input{
            box-sizing: border-box;
            background: transparent;
            border: none;
            width: 100%;
            border-bottom: 1px solid $orange;
            padding: 5px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
