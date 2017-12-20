<template>
  <div class="like">
    <x-header title="我的收藏"></x-header>
    <div class="like-container">
      <tab>
        <tab-item selected @on-item-click="onClickType('activiti')">活动</tab-item>
        <tab-item @on-item-click="onClickType('article')">文章</tab-item>
        <tab-item @on-item-click="onClickType('voit')">拉票</tab-item>
      </tab>
    </div>
  </div>
</template>
<script>
import { XHeader, Tab, TabItem } from 'vux'
export default {
  components: {
    XHeader,
    Tab,
    TabItem
  },
  methods: {
    onClickType (type) {
      console.log(type)
    }
  }
}
</script>
<style lang="scss" scoped>
  .like{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .like-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
  }
</style>
