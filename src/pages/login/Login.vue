<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-box">
        <div class="tab">
          <div :class="{'tab-active' : loginType === 'personal'}" @click="switchLoginType('personal')">个人登陆</div>
          <div :class="{'tab-active' : loginType === 'merchant'}" @click="switchLoginType('merchant')">商家登陆</div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入手机号码/邮箱" v-model="loginInfo.username">
          <input type="password" placeholder="请输入密码" v-model="loginInfo.password">
          <x-button type="primary" class="jrh-primary-btn" @click.native="login">登陆</x-button>
          <div class="center-text">
            <span class="fs12">聚蕊烩协议</span>
            <span class="fs12">忘记密码?</span>
          </div>
          <divider class="c9">使用第三方登陆</divider>
          <div class="icon-box">
            <div class="icon-item">
              <i class="fs34 iconfont icon-weixin" style="color: #47db4e;"></i>
              <span>腾讯微信</span>
            </div>
            <div class="icon-item">
              <i class="fs34 iconfont icon-qq" style="color: #4cafe9;"></i>
              <span>腾讯QQ</span>
            </div>
            <div class="icon-item">
              <i class="fs34 iconfont icon-weibo" style="color: #ea5d5c;"></i>
              <span class="fs12">新浪微博</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XButton, Divider } from 'vux'
export default {
  components: {
    Divider,
    XButton
  },
  data () {
    return {
      loginInfo: {
        username: '',
        password: ''
      },
      loginType: 'personal'
    }
  },
  methods: {
    switchLoginType (type) {
      if (type === this.loginType) {
        return
      }
      this.loginType = type
    },
    login () {
      let _username = this.loginInfo.username.trim()
      let _password = this.loginInfo.password
      if (_username === '' || _password === '') {
        this.$vux.toast.show({
          text: '请输入用户名和密码',
          type: 'cancel',
          width: '50%'
        })
      } else {
        let _userInfo = this.loginInfo
        _userInfo.userType = this.loginType
        this.$vux.loading.show({
          text: '正在登陆'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.$router.push({
            name: 'Index'
          })
        })
      }
    }
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
      background: red linear-gradient(#ffe5e5, #fffcf1);
    .login-bg{
      @include full;
      background: url('../../../static/images/slogan.png') center 80% no-repeat / 260px;
      .login-box{
        width: 80%;
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
        .center-text{
          display: flex;
          align-items: center;
          text-align: center;
          color: #999;
          text-decoration: underline;
          margin: 10px 0;
          span{
            flex: 1;
          }
        }
        .icon-box{
          display: flex;
          justify-content: center;
          .icon-item{
            width: 60px;
            display: flex;
            flex-direction: column;
            text-align: center;
            i, span{
              flex: 1;
            }
          }
        }
      }
    }
  }
</style>
