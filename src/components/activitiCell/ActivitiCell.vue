<template>
  <div class="activiti-cell">
    <p class="cell-title" v-if="activitiCellItem.title">{{activitiCellItem.title}}</p>
    <div class="activiti-body vux-1px-t vux-1px-b">
      <div class="activiti-cell-content">
        <img src="static/images/cbd.jpg" alt="">
        <div class="content-right">
          <p class="activiti-info">{{activitiCellItem.content}}</p>
          <p class="activiti-price">￥{{activitiCellItem.price}}</p>
        </div>
      </div>
      <div class="activiti-cell-footer vux-1px-t">
        <p v-if="activitiCellItem.activitiEnded">
          <span class="activiti-ended">活动已结束</span>
          <span class="joined">{{activitiCellItem.activitiEnded.joined ? '已参与活动' : '未参与活动'}}</span>
        </p>
        <p v-else>
          <span class="activiti-ended">活动尚未开始</span>
          <a class="btn" href="javascript:void(0)">确认参加</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  name: 'ActivitiCell',
  components: {
    XHeader
  },
  props: {
    activitiCellItem: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .activiti-cell{
    .cell-title{
      margin: 5px 0;
      padding: 0 15px;
      color: #999;
      font-size: 12px;
    }
    .activiti-body{
      position: relative;
      background-color: #fff;
      .activiti-cell-content{
        padding: 10px;
        display: flex;
        img{
          width: 80px;
          height: 60px;
          margin-right: 10px;
        }
        .content-right{
          flex: 1;
          display: flex;
          flex-direction: column;
          .activiti-info{
            font-size: 12px;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            display: -webkit-box !important;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            flex: 1;
          }
          .activiti-price{
            text-align: right;
            font-size: 12px;
            color: #eb8256;
          }
        }
      }
      .activiti-cell-footer{
        font-size: 10px;
        color: #999;
        padding: 5px 10px;
        p{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .btn{
            padding: 2px 5px;
            background-color: #eb8256;
            border-radius: 3px;
            color: #fff;
          }
        }
      }
    }

  }
</style>
