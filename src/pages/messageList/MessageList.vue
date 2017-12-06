<template>
  <div class="message-list">
    <x-header :title="messageListTitle"></x-header>
    <div class="message-list-container">
      <message-card v-for="(item, index) in msgDataList" :key="index" :msgData="item"></message-card>
    </div>
  </div>
</template>
<script>
import MessageCard from '../../components/messageCard'
import { XHeader } from 'vux'
export default {
  components: {
    XHeader,
    MessageCard
  },
  data () {
    return {
      msgDataList: [
        {
          time: '2016-08-08 13:37',
          headTitle: '活动开始',
          content: '您报名的"XXXXX"活动，将与明天14:30在"XXXXXXXXXXXXXXXXXXXX"举行。请安排好出行计划，提前30分钟进场。如有疑问，请及时与主办方联系。',
          footTitle: '查看详情'
        },
        {
          time: '2016-08-08 13:37',
          headTitle: '活动开始',
          content: '您报名的"XXXXX"活动，将与明天14:30在"XXXXXXXXXXXXXXXXXXXX"举行。请安排好出行计划，提前30分钟进场。如有疑问，请及时与主办方联系。',
          footTitle: '查看详情'
        },
        {
          time: '2016-08-08 13:37',
          headTitle: '活动开始',
          content: '您报名的"XXXXX"活动，将与明天14:30在"XXXXXXXXXXXXXXXXXXXX"举行。请安排好出行计划，提前30分钟进场。如有疑问，请及时与主办方联系。',
          footTitle: '查看详情'
        }
      ],
      messageListTitle: null // x-header的title
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    let _type = this.$route.query.type
    if (_type) {
      switch (_type) {
        case 'commentAndLike':
          this.messageListTitle = '评论和赞'
          break
        case 'activityRemind':
          this.messageListTitle = '活动提醒'
          break
        case 'systemMessage':
          this.messageListTitle = '系统消息'
          break
        case 'officialNotice':
          this.messageListTitle = '官方通知'
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .message-list{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .message-list-container{
      overflow: auto;
      flex: 1;
      height: 100%;
      padding: 10px;
    }
  }
</style>
