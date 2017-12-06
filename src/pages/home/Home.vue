<template>
  <div class="home">
    <div class="item ruike">蕊客</div>
    <div class="item huodong">活动</div>
    <div class="item juwan">聚玩</div>
    <div class="item dingzhi">私人定制</div>
    <div class="item zhongchou">活动众筹</div>
    <div class="item shouquan">活动授权</div>
    <div class="item fenxiang">活动分享</div>
    <div class="item shequ">社区</div>
  </div>
</template>
<script>
export default {
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .home{
    padding: 2px;
    display: grid;
    grid-template-columns: 50%;
    grid-template-rows: 20%;
    .item{
      margin: 2px;
    }
    .ruike{
      grid-row: 1/3;
      background-color: #F6C1D2;
    }
    .huodong{
      grid-column-start: 50%;
      grid-column-end: 10%;
      background-color: #E87986;
    }
    .juwan{
      background-color: #AFD782;
    }
    .dingzhi{
      grid-column: 1 / 3;
      background-color: #92C1DD;
    }
    .zhongchou{
      background-color: #EB8256;
    }
    .shouquan{
      background-color: #E5A091;
    }
    .fenxiang{
      background-color: #FFBB50;
    }
    .shequ{
      background-color: #917BEC;
    }
  }
</style>
