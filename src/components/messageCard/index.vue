<template>
  <div class="message-card">
    <p class="message-card-time">{{msgData.time}}</p>
    <card :header="{title: msgData.headTitle}" :footer="{title: msgData.footTitle}">
      <div slot="content" class="message-card-content">
        <p>{{msgData.content}}</p>
      </div>
    </card>
  </div>
</template>
<script>
import { Card } from 'vux'
export default {
  name: 'MessageCard',
  components: {
    Card
  },
  props: {
    msgData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .message-card{
    position: relative;
    .message-card-time{
      color: #999;
      text-align: center;
      font-size: 12px;
      margin-top: 10px;
    }
    .message-card-content{
      padding: 10px;
    }
  }
</style>
