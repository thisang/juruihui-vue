<template>
  <div class="my-foot-point">
    <x-header title="我的足迹"></x-header>
    <div class="my-foot-point-container">
    <timeline>
        <timeline-item>
          <h4>开启聚蕊烩之旅</h4>
          <p>2016年8月21日</p>
        </timeline-item>
        <timeline-item>
            <h4>欢迎加入武汉影视圈</h4>
            <p>2016年8月22日</p>
        </timeline-item>
        <timeline-item>
            <h4>嘴张大点, 软媒给你喂酒</h4>
            <p>2016年8月23日</p>
        </timeline-item>
        <timeline-item>
            <h4 class="recent">关于创业武汉 · 第六期青创营学院招募</h4>
            <p class="recent">2016年8月24日</p>
        </timeline-item>
    </timeline>
    </div>
  </div>
</template>
<script>
import {  XHeader, Timeline, TimelineItem } from 'vux'
export default {
  components: {
    XHeader,
    Timeline,
    TimelineItem
  }
}
</script>
<style lang="scss" scoped>
  .my-foot-point{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .my-foot-point-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
  }
</style>
