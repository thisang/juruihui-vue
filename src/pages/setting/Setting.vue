<template>
  <div class="setting">
    <x-header title="设置" :leftOptions="{backText: '我的'}"></x-header>
    <div class="setting-container">
      <group>
        <cell title="账号资料" is-link @click.native="toPage('Account')"></cell>
      </group>
      <group>
        <cell title="消息通知设置" is-link @click.native="toPage('SetNotice')"></cell>
      </group>
      <group>
        <cell title="意见反馈" is-link @click.native="toPage('Feedback')"></cell>
      </group>
      <group>
        <cell title="邀请好友使用" is-link @click.native="showActionSheet = true"></cell>
      </group>
      <group>
        <cell title="检查更新" is-link @click.native="update"></cell>
      </group>
      <group>
        <cell title="关于聚蕊烩" is-link value="v1.0.0" @click.native="alertMe"></cell>
      </group>
      <group>
        <cell class="exit" @click.native="loginOut">
          <p class="login-out">退出登陆</p>
        </cell>
      </group>
      <actionsheet v-model="showActionSheet" :menus="menus" show-cancel @on-click-menu="onClickMenu"></actionsheet>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import { XHeader, Group, Cell, Actionsheet } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    Actionsheet
  },
  data () {
    return {
      showActionSheet: false,
      menus: ['发送给微信好友', '分享到微信朋友圈', '分享到新浪微博', '分享到腾讯微博', '分享到QQ']
    }
  },
  computed: {
    ...mapState([
      'main'
    ])
  },
  methods: {
    ...mapMutations([
      'IS_LOGIN'
    ]),
    toPage (routeName) {
      this.$router.push({
        name: routeName
      })
    },
    onClickMenu (type) {
      console.log(type)
    },
    update () {
      this.$vux.alert.show({
        title: '提示',
        content: '当前为最新版, 不需要升级, thx !'
      })
    },
    alertMe () {
      this.$vux.alert.show({
        title: 'Hi',
        content: 'This is ang !'
      })
    },
    loginOut () {
      this.$vux.loading.show({
        text: '正在退出'
      })
      this.http({
        url: '/api/juruihui/logout',
        method: 'POST',
        data: {
          uid: this.main.loginInfo.uid
        },
        error: err => {
          console.log('err', err)
          this.$vux.loading.hide()
        },
        success: res => {
          console.log('res', res)
          this.$vux.loading.hide()
          this.IS_LOGIN(false)
          this.$router.push({
            name: 'Login'
          })
        }
      })
    }
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

