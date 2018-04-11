<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-box">
        <div class="tab">
          <div :class="{'tab-active' : userType === 'personal'}" @click="switchUserType('personal')">个人登陆</div>
          <div :class="{'tab-active' : userType === 'merchant'}" @click="switchUserType('merchant')">商家登陆</div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入手机号码/邮箱" v-model="loginInfo.username">
          <input type="password" placeholder="请输入密码" v-model="loginInfo.password">
          <x-button type="primary" class="jrh-primary-btn" @click.native="login">登陆</x-button>
          <div class="center-text">
            <span class="fs12">忘记密码?</span>
            <span class="fs12" @click="showSignin = true">没有账号?去注册</span>
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
    <popup v-model="showSignin" position="right" width="100%" >
      <x-header :left-options="{backText: '', preventGoBack: true	}" title="用户注册" @on-click-back="showSignin = false"></x-header>
      <div class="sign-body">
        <group>
          <x-input title="用户名" v-model.trim="signInfo.username" placeholder="请输入用户名" type="text"></x-input>
          <x-input title="手机号" v-model.trim="signInfo.phone" placeholder="请输入手机号" mask="99999999999" :max="13" is-type="china-mobile" ></x-input>
          <x-input title="密码" v-model.trim="signInfo.password" placeholder="请输入密码" type="password"></x-input>
          <x-input title="确认密码" v-model.trim="signInfo.confirmPassword" placeholder="请再次输入密码" type="password"></x-input>
          <selector title="用户类型" :options="regType" v-model="signInfo.role"></selector>
        </group>
        <div class="reg-btn">
          <x-button type="primary" class="jrh-primary-btn" @click.native="regin">注册</x-button>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import { XButton, Divider, Popup, XHeader, Group, XInput, Selector } from 'vux'
import { mapMutations } from 'vuex'
export default {
  components: {
    Divider,
    XButton,
    Popup,
    XHeader,
    Group,
    XInput,
    Selector
  },
  data () {
    return {
      regType: [
        {
          key: 'personal',
          value: '个人用户'
        },
        {
          key: 'merchant',
          value: '商家用户'
        }
      ],
      signInfo: {
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: ''

      },
      showSignin: false,
      loginInfo: {
        username: '',
        password: ''
      },
      userType: 'personal'
    }
  },
  methods: {
    ...mapMutations([
      'LOGIN_INFO',
      'IS_LOGIN'
    ]),
    switchUserType (type) {
      if (type === this.userType) {
        return
      }
      this.userType = type
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
        return
      }
      this.$vux.loading.show({
        text: '正在登陆'
      })
      this.http({
        url: '/api/juruihui/login',
        method: 'POST',
        data: {
          username: this.loginInfo.username,
          password: this.loginInfo.password
        },
        error: err => {
          console.log(err)
          this.$vux.loading.hide()
          this.$vux.toast.show({
            type: 'cancel',
            text: '登录失败'
          })
        },
        success: res => {
          console.log(res)
          this.$vux.loading.hide()
          if (res.err) {
            this.$vux.toast.show({
              type: 'cancel',
              text: res.err
            })
            return
          }
          this.LOGIN_INFO(res)
          this.IS_LOGIN(true)
          this.$router.push({
            name: 'Index'
          })
        }
      })
    },
    regVerify () {
      for (let i in this.signInfo) {
        if (this.signInfo[i] === '') {
          this.$vux.toast.show({
            text: '请填写完整',
            type: 'cancel'
          })
          return false
        }
      }
      if (this.signInfo.password !== this.signInfo.confirmPassword) {
        this.$vux.toast.show({
          text: '密码不一致',
          type: 'cancel'
        })
        this.signInfo.password = ''
        this.signInfo.confirmPassword = ''
        return false
      }
      return true
    },
    regin () {
      if (this.regVerify()) {
        this.$vux.loading.show({
          text: '正在注册'
        })
        this.http({
          url: '/api/juruihui/signin',
          method: 'POST',
          data: {
            username: this.signInfo.username,
            phone: this.signInfo.phone,
            password: this.signInfo.password,
            role: this.signInfo.role
          },
          error: function(err) {
            console.log('注册失败', err);
            this.$vux.loading.hide();
            this.$vux.toast.show({
              type: 'cancel',
              text: '注册失败'
            })
          },
          success: function(res) {
            this.$vux.loading.hide();
            if (res.err) {
              this.$vux.toast.show({
                type: 'cancel',
                text: res.err
              })
              return;
            }
            console.log('注册成功', res);
            this.showSignin = false;
          }
        })
      }
    }
  },
  watch: {
    showSignin (newVal, oldVal) {
      if (!newVal) {
        for (let i in this.signInfo) {
          this.signInfo[i] = ''
        }
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
    .reg-btn{
      margin: 20px 10px;
    }
  }
</style>
