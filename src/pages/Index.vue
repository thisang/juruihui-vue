<template>
  <div class="home">
    <top-head class="top-head">
      <span class="left" slot="head-left" @click="chooseCity">
        <i class="city">{{nowCity}}</i>
        <i class="fs20 iconfont icon-position"></i>
      </span>
      <span class="right" slot="head-right">
        <i class="fs20 iconfont icon-search"></i>
      </span>
    </top-head>
    <router-view class="home-container"></router-view>
    <tabbar class="footer vux-1px-t">
      <tabbar-item @click.native="toPage('home')" :selected="currentTab === 'Home'">
        <i slot="icon" class="icon iconfont icon-home"></i>
        <span class="footer-text" slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @click.native="toPage('find')" :selected="currentTab === 'Find'">
        <i slot="icon" class="icon iconfont icon-eye"></i>
        <span class="footer-text" slot="label">发现</span>
      </tabbar-item>
      <tabbar-item @click.native="toPage('publish')" :selected="currentTab === 'Publish'">
        <i slot="icon" class="icon iconfont icon-add"></i>
        <span class="footer-text" slot="label">发布</span>
      </tabbar-item>
      <tabbar-item  badge="2" @click.native="toPage('message')" :selected="currentTab === 'Message'">
        <i slot="icon" class="icon iconfont icon-msg"></i>
        <span class="footer-text" slot="label">消息</span>
      </tabbar-item>
      <tabbar-item show-dot @click.native="toPage('mine')" :selected="currentTab === 'Mine'">
        <i slot="icon" class="icon iconfont icon-me"></i>
        <span class="footer-text" slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Tabbar, TabbarItem } from 'vux'
import TopHead from '../components/topHead'
export default {
  components: {
    TopHead,
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapGetters([
      'currentCityStatus'
    ]),
    nowCity () {
      return this.currentCityStatus
    },
    currentTab () {
      return this.$route.name
    }
  },
  methods: {
    toPage (type) {
      switch (type) {
        case 'home':
          this.$router.push({
            name: 'Home'
          })
          break
        case 'find':
          this.$router.push({
            name: 'Find'
          })
          break
        case 'publish':
          this.$router.push({
            name: 'Publish'
          })
          break
        case 'message':
          this.$router.push({
            name: 'Message'
          })
          break
        case 'mine':
          this.$router.push({
            name: 'Mine'
          })
          break
      }
    },
    chooseCity () {
      this.$router.push({
        name: 'CityList'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .home-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
    .top-head{
      .city{
        margin-right: -4px;
      }
    }
    .footer{
      .footer-text{
        font-size: 12px;
      }
      .icon{
        font-size: 24px;
        color: #eb8256;
        position: relative;
        top: -4px;
      }
    }
  }
</style>
<style lang="scss">
  .home{
    .footer{
      position: relative;
      .weui-tabbar__label{
        color: #eb8256;
      }
      .weui-bar__item_on{
        .weui-tabbar__icon>i, .weui-tabbar__label{
          color: #8B4324 !important;
        }
      }
    }
  }
</style>
