<template>
  <div class="mine">
    <x-header :title="messageListTitle"></x-header>
    <div class="mine-container">
      <p>消息列表</p>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
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
  .mine{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .mine-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
  }
</style>
