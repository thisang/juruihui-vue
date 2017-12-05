<template>
  <div class="message">
    <group>
      <cell title="评论和赞" is-link @click.native="toMessageListPage('commentAndLike')">
        <i slot="icon" class="fs20 iconfont icon-position"></i>
        <badge class="badge" text="3"></badge>
      </cell>
      <cell title="活动提醒" is-link @click.native="toMessageListPage('activityRemind')">
        <i slot="icon" class="fs20 iconfont icon-position"></i>
        <badge class="badge" text="1" v-if="false"></badge>
      </cell>
      <cell title="系统消息" is-link @click.native="toMessageListPage('systemMessage')">
        <i slot="icon" class="fs20 iconfont icon-position"></i>
        <badge class="badge" text="1" v-if="false"></badge>
      </cell>
      <cell title="官方通知" is-link @click.native="toMessageListPage('officialNotice')">
        <i slot="icon" class="fs20 iconfont icon-position"></i>
        <badge class="badge" text="1"></badge>        
      </cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell, Badge } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Badge
  },
  computed: {
  },
  methods: {
    toMessageListPage (type) {
      this.$router.push({
        name: 'MessageList',
        query: {
          type: type
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .message{
    .badge{
      display: block;
    }
  }
</style>
