<template>
  <div class="all-voucher">
    <x-header title="已完成"></x-header>
    <div class="all-voucher-container">
      <activiti-cell v-for="(item, index) in activitiCellList" :key="index" :activitiCellItem="item"></activiti-cell>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import ActivitiCell from '../../components/activitiCell/ActivitiCell'
export default {
  components: {
    XHeader,
    ActivitiCell
  },
  data () {
    return {
      activitiCellList: [
        {
          title: '2016年09月01日 12:30 报名了该活动',
          content: '网络营销策划,网络营销策划,网络营销策划,网络营销策划,网络营销策划',
          price: '999',
          activitiEnded: {
            text: '活动已结束',
            joined: true
          }
        },
        {
          title: '2016年09月01日 12:30 报名了该活动',
          content: '网络营销策划,网络营销策划,网络营销策划,网络营销策划,网络营销策划',
          price: '999',
          activitiEnded: {
            text: '活动已结束',
            joined: true
          }
        },
        {
          title: '2016年09月01日 12:30 报名了该活动',
          content: '网络营销策划,网络营销策划,网络营销策划,网络营销策划,网络营销策划',
          price: '999',
          activitiEnded: {
            text: '活动已结束',
            joined: true
          }
        },
        {
          title: '2016年09月01日 12:30 报名了该活动',
          content: '网络营销策划,网络营销策划,网络营销策划,网络营销策划,网络营销策划',
          price: '999',
          activitiEnded: {
            text: '活动已结束',
            joined: false
          }
        },
        {
          title: '2016年09月01日 12:30 报名了该活动',
          content: '网络营销策划,网络营销策划,网络营销策划,网络营销策划,网络营销策划',
          price: '999',
          activitiEnded: {
            text: '活动已结束',
            joined: true
          }
        },
        {
          title: '2016年09月01日 12:30 报名了该活动',
          content: '网络营销策划,网络营销策划,网络营销策划,网络营销策划,网络营销策划',
          price: '999',
          activitiEnded: {
            text: '活动已结束',
            joined: true
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .all-voucher{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .all-voucher-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
  }
</style>

