<template>
  <div class="mine">
    <div class="mine-head">
      <i class="mine-set iconfont icon-setting" @click="toSetting"></i>
      <div class="switch-user-type">
        <span class="left-type" @click="switchUserType('personal')" :class="{'current-type' : main.loginInfo.userType === 'personal'}">参与者</span><span class="right-type" @click="switchUserType('merchant')" :class="{'current-type' : main.loginInfo.userType === 'merchant'}">主办方</span>
      </div>
      <div class="mine-avatar">
        <img class="avatar" src="../../../static/images/ang.jpg" @click="toPage('PersonalInformation')">
        <span class="username">{{main.loginInfo.username}}</span>
        <div class="login-type">
          <span>QQ登陆</span>
        </div>
      </div>
    </div>
    <div class="personal" v-if="main.loginInfo.userType === 'personal'">
      <group>
        <cell title="我的活动" is-link value="查看全部电子凭证" @click.native="toPage('AllVoucher')"></cell>
        <cell class="cell-item">
          <div class="items">
            <div class="my-item" @click="toPage('ToPay')">
              <div class="my-item-inner">
                <span>0</span>
                <span class="mt5">待付款</span>
              </div>
            </div>
            <div class="my-item vux-1px-l vux-1px-r">
              <div class="my-item-inner">
                <span>0</span>
                <span class="mt5">待参与</span>
              </div>
            </div>
            <div class="my-item">
              <div class="my-item-inner">
                <span>0</span>
                <span class="mt5">已完成</span>
              </div>
            </div>
          </div>
        </cell>
      </group>
      <group>
        <cell title="收藏的活动" is-link>
          <i slot="icon" class="iconfont icon-liked orange mr5"></i>
        </cell>
        <cell title="关注的主办方" is-link>
          <i slot="icon" class="iconfont icon-collect orange mr5"></i>
        </cell>
        <cell title="我的足迹" is-link @click.native="toPage('MyFootPoint')">
          <i slot="icon" class="iconfont icon-footpoint orange mr5"></i>          
        </cell>
      </group>
      <div class="ad">
        <img src="../../../static/images/my_banner.png" alt="">
      </div>
    </div>
    <div class="merchant" v-else>
      <group>
        <cell class="cell-item">
          <div class="items">
            <div class="my-item">
              <div class="my-item-inner">
                <i slot="icon" class="iconfont icon-huodong orange mr5"></i>
                <span class="mt5">管理活动</span>
              </div>
            </div>
            <div class="my-item vux-1px-l vux-1px-r">
              <div class="my-item-inner">
                <i slot="icon" class="iconfont icon-baomingguanli orange mr5"></i>
                <span class="mt5">管理报名</span>
              </div>
            </div>
            <div class="my-item">
              <div class="my-item-inner">
                <i slot="icon" class="iconfont icon-piao orange mr5"></i>
                <span class="mt5">验票</span>
              </div>
            </div>
          </div>
        </cell>
      </group>
      <group>
        <cell title="活动收入" is-link>
          <i slot="icon" class="iconfont icon-qianbao orange mr5"></i>
        </cell>
        <cell title="短信账户" is-link>
          <i slot="icon" class="iconfont icon-duanxin orange mr5"></i>
        </cell>
        <cell title="我的主页" is-link>
          <i slot="icon" class="iconfont icon-home orange mr5"></i>          
        </cell>
        <cell title="我的粉丝" is-link>
          <i slot="icon" class="iconfont icon-fens orange mr5"></i>          
        </cell>
        <cell title="我的指南" is-link>
          <i slot="icon" class="iconfont icon-zhinan orange mr5"></i>          
        </cell>
      </group>
    </div>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Group,
    Cell
  },
  computed: {
    ...mapState([
      'main'
    ]),
    ...mapGetters([
      'loginInfoStatus'
    ])
  },
  methods: {
    ...mapMutations([
      'LOGIN_INFO'
    ]),
    toPage (routename) {
      this.$router.push({
        name: routename
      })
    },
    switchUserType (type) {
      let _loginInfo = JSON.parse(JSON.stringify(this.loginInfoStatus))
      _loginInfo.userType = type
      this.LOGIN_INFO(_loginInfo)
    },
    toSetting () {
      this.$router.push({
        name: 'Setting'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mine{
    .mine-head{
      height: 150px;
      background-color: #eb8256;
      position: relative;
      .mine-set{
        position: absolute;
        color: #fff;
        right: 10px;
        top: 5px;
      }
      .mine-avatar{
        text-align: center;
        .username{
          color: #fff;
          font-size: 14px;
        }
        .login-type{
          margin-top: 5px;
          span{
            color: #fff;
            padding: 0px 5px;
            border: 1px solid #fff;
            border-radius: 3px;
            font-size: 12px;
          }
        }
        .avatar{
          display: block; 
          margin: 10px auto 5px;
          width: 50px;
          height: 50px;
          border: 1px solid #ffc1a7;
          border-radius: 50%;
        }
      }
      .switch-user-type{
        text-align: center;
        padding-top: 10px;
        .left-type{
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .right-type{
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        .current-type{
          background-color: #fff;
          color: #eb8256;
        }
        span{
          color: #eb8256;
          padding: 2px 5px;
          font-size: 12px;
          background-color: #ffbca0;
        }
      }
    }
    .items{
      display: flex;
      .my-item{
        padding: 5px;
        flex: 1;
        height: 40px;
        color: #999;
        .my-item-inner{
          display: flex;
          flex-direction: column;
          align-items: center;
          span{
            flex: 1;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
    .ad{
      margin-top: 10px;
      img{
        width: 100%;
      }
    }
  }
</style>
<style lang="scss">
  .mine{
    .cell-item{
      .weui-cell__ft{
        width: 100% !important;
      }
    }
  }
</style>
