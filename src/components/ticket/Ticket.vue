<template>
  <div class="ticket" @click="checkTicket">
    <div class="ticket-left">
      <p>{{ticket.type}}</p>
    </div>
    <div class="ticket-right">
      <p class="ticket-title">{{ticket.name}}</p>
      <p class="ticket-prise">{{ticket.price}}元</p>
      <p class="ticket-list">剩余: {{ticket.list}}</p>
    </div>
    <div class="checked" v-if="checked">
      <i class="weui-icon weui_icon_success weui-icon-success eb8256"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ticket',
  props: {
    ticket: {
      type: Object,
      require: true
    },
    checked: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  methods: {
    checkTicket () {
      this.$emit('on-check-ticket')
    }
  }
}
</script>
<style lang="scss" scoped>
  .ticket{
    display: flex;
    position: relative;
    width: 250px;
    margin: 20px auto;
    border: 1px solid #eb8256;
    height: 100px;
    .checked{
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
    .ticket-left{
      width: 100px;
      background-color: #eb8256;
      color: #fff;
      display: flex;
      align-items: center;
      p{
        flex: 1;
        text-align: center;
      }
    }
    .ticket-right{
      background-color: #fff;
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 10px;
      justify-content: space-around;
      .ticket-list{
        color: #999;
        font-size: 12px;
      }
    }
  }
</style>
