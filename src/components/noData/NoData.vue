<template>
  <div class="no-data">
    <i class="icon iconfont" :class="iconName"></i>
    <p class="text">{{info}}</p>
  </div>
</template>
<script>
export default {
  name: 'NoData',
  props: {
    info: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      default () {
        return 'icon-meiyoushuju'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .no-data{
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon{
      color: #999;
      font-size: 30px;
    }
    .text{
      font-size: 12px;
      color: #999;
    }
  }
</style>
