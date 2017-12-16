<template>
  <div class="activiti-detail">
    <x-header title="北京动漫嘉年华"></x-header>
    <div class="acticiti-detail-container">
      <div class="activiti-head">
        <img class="activiti-img" src="../../../static/images/cbd.jpg" alt="">
        <div class="card-like">
          <i class="iconfont icon-liked" v-if="true"></i>
          <i class="iconfont icon-like" v-else></i>
          <span class="like-num">12</span>
        </div>
        <span class="card-tags">
          <span class="tag">
            <i >动漫</i>
          </span>
          <span class="read">浏览 1234</span>
        </span>
        <span class="card-appaly">
          <i class="css-tag"></i>
          <i class="appaly">可报名</i>
        </span>
      </div>
      <div class="p10">
        <p class="activiti-info">
          <i class="iconfont icon-position"></i>
          <span>2016/08/23/06-24</span>
        </p>
        <p class="activiti-info">
          <i class="iconfont icon-position"></i>        
          <span>朝阳区</span>
          <span>天辰东路7号国家会议中心</span>
          <span>- 1.1km</span>
        </p>
        <div class="puhlisher">
          <img src="../../../static/images/ang.jpg" alt="">
          <p>蔺鑫源</p>
          <span>关注TA</span>
        </div>
        <div class="switch-btn">
          <span :class="{active: activeBtn ==='detail'}" @click="activeBtn = 'detail'">活动详情</span><span :class="{active: activeBtn === 'tickets'}" @click="activeBtn = 'tickets'">活动门票</span>
        </div>
        <div class="mt10" v-if="activeBtn === 'detail'">
          <p class="h3">活动通知</p>
          <p>第四届CPRJ塑料包装技术论坛暨展示会</p>
          <p>日期: 2016年8月4-5日</p>
          <p>地点: 中国上海</p>
          <p>议题:</p>
          <ul>
            <li>创新功能塑料包装工艺</li>
            <li>高效创新包装工艺与自动化</li>
            <li>安全,环保,绿色塑料袋包装</li>
          </ul>
          <p class="h3">活动日程</p>
          <p>8月4日(全天)</p>
          <p>主题演讲及展示会</p>
          <p>互动交流晚宴</p>
          <p>8月5日(全天)</p>
          <p>圆桌讨论/参观工厂(待定)</p>
          <p class="h3">活动嘉宾</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p>丁少辉</p>
          <p>中国食品包装机械工业协会副秘书长</p>
          <p class="h3">联系方式</p>
          <p>想在第一时间掌握活动动向?想随时了解各赛区的即时通讯?请随时关注官方微信所发布的讯息</p>
          <p>联系人: 聚蕊烩</p>
          <p>联系电话: 152XXXXXXXX</p>
          <p>QQ: 8379XXXXX</p>
          <p>QQ群: 2454XXXXXXX</p>
          <p>邮箱: thisang@thisang.xyz</p>
        </div>
        <div v-else class="mt10">
          <p class="h3">目标听众:</p>
          <p>包装,食品材料,日化品和化妆品等企业</p>
          <ticket v-for="(item, index) in ticketList" :key="index" :ticket="item" @on-check-ticket="onCheckTicket(index)" :checked="index === checkedTicket"></ticket>
        </div>
      </div>
    </div>
    <div class="activiti-footer vux-1px-t" @click="showPopup = true">
      我要报名
    </div>
    <popup v-model="showPopup" position="bottom" height="100%">
      <x-header title="北京动漫嘉年华" :left-options="{showBack: false}">
        <i slot="right" class="weui-icon weui_icon_cancel weui-icon-cancel fff" @click="showPopup = false"></i>
      </x-header>
      <div class="activiti-detail-inner-page">
        <ticket :ticket="ticketList[checkedTicket]" :checked="true"></ticket>
        <divider>完善报名信息</divider>
        <group>
          <x-input title="姓名" v-model="appalyInfo.username" placeholder="请输入姓名"></x-input>
          <x-input title="手机" v-model="appalyInfo.phone" placeholder="请输入手机号"></x-input>
          <x-input title="微信号" v-model="appalyInfo.wechat" placeholder="请输入微信号"></x-input>
          <x-input title="身份证号" v-model="appalyInfo.idCard" placeholder="请输入身份证号"></x-input>
        </group>
        <div class="p10 mt5">
          <x-button type="primary" class="jrh-primary-btn" @click.native="appaly">提交</x-button>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import { XHeader, Popup, Divider, Group, XInput, XButton } from 'vux'
import Ticket from '../../components/ticket/Ticket'
export default {
  components: {
    XHeader,
    Ticket,
    Popup,
    Divider,
    Group,
    XInput,
    XButton
  },
  data () {
    return {
      appalyInfo: {
        username: '',
        phone: '',
        wechat: '',
        idCard: ''
      },
      showPopup: false,
      checkedTicket: 0,
      ticketList: [
        {
          type: '免费',
          price: 0,
          name: '参会, 互动, 免费零食',
          list: 221
        },
        {
          type: 'VIP',
          price: 99,
          name: '雅间',
          list: 34
        },
        {
          type: 'SVIP',
          price: 398,
          name: '展位, 晚宴, 住宿',
          list: 8
        }
      ],
      activeBtn: 'detail'
    }
  },
  methods: {
    onCheckTicket (index) {
      this.checkedTicket = index
    },
    appaly () {
      this.$vux.loading.show({
        text: '正在提交'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.$vux.toast.show({
          text: '报名成功',
          type: 'success'
        })
        this.showPopup = false
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .activiti-detail{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .acticiti-detail-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
    .activiti-footer{
      height: 30px;
      line-height: 30px;
      color: #fff;
      background-color: #eb8256;
      text-align: center;
    }
    .activiti-head{
      width: 100%;
      height: 150px;
      position: relative;
      overflow: hidden;
      .card-like{
        position: absolute;
        right: 10px;
        top: 0px;
        i{
          color: #eb8256;
        }
        .like-num {
          position: relative;
          color: #fff;
          top: -1px;
        }
      }
      .activiti-img{
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .card-tags{
        position: absolute;
        bottom: 5px;
        left: 5px;
        color: #fff;
        font-size: 10px;
        .tag{
          background-color: #eb8256;
          padding: 1px 5px;
          border-radius: 3px;
        }
      }
      .card-appaly{
        position: absolute;
        bottom: 5px;
        right: 0;
        .css-tag{
          position: absolute;
          display: inline-block;
          border-style: solid;
          border-left-color: transparent;
          color: #eb8256;
          left: -10px;
          top: 1px;
          border-width: 8px;
        }
        .appaly{
          font-size: 10px;
          z-index: 2;
          position: relative;
          height: 16px;
          line-height: 16px;
          display: inline-block;
          color: #fff;
          background-color: #eb8256;
        }
      }
      .activiti-info{
        i{
          font-size: 12px;
          color: #333;
        }
        font-size: 12px;
        color: #999;
      }
    }
    .puhlisher{
      background-color: #fff;
      border: 1px solid #eb8256;
      display: flex;
      padding: 10px;
      align-items: center;
      margin: 10px 0;
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
      }
      p{
        color: #eb8256;
        flex: 1;
        font-size: 14px;
      }
      span{
        background-color: #eb8256;
        color: #fff;
        padding: 2px 5px;
        font-size: 10px;
        border-radius: 3px;
      }
    }
    .switch-btn{
      display: flex;
      align-items: center ;
      border: 1px solid #eb8256;
      border-radius: 3px;
      background-color: #fff;
      span{
        font-size: 12px;
        flex: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #eb8256;
      }
      span.active{
        background-color: #eb8256;
        color: #fff;
      }
    }
    .h3{
      font-size: 16px;
      color: #eb8256;
      border-bottom: 1px solid #eb8256;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
  }
</style>
