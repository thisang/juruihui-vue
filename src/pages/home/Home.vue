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
    <router-view></router-view>
    <tabbar class="footer">
      <tabbar-item>
        <i slot="icon" class="icon iconfont icon-home"></i>
        <span class="footer-text" slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="icon iconfont icon-eye"></i>
        <span class="footer-text" slot="label">发现</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="icon iconfont icon-add"></i>
        <span class="footer-text" slot="label">发布</span>
      </tabbar-item>
      <tabbar-item  badge="2">
        <i slot="icon" class="icon iconfont icon-msg"></i>
        <span class="footer-text" slot="label">消息</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <i slot="icon" class="icon iconfont icon-me"></i>
        <span class="footer-text" slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Tabbar, TabbarItem } from 'vux'
import TopHead from '../../components/topHead'
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
    }
  },
  methods: {
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
    .top-head{
      .city{
        margin-right: -4px;
      }
    }
    .footer{
      .footer-text{
        // color: #eb8256;
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



