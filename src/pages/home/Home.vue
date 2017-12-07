<template>
  <div class="home">
    <div class="item ruike item1">
      <img src="../../../static/images/ruike.png" alt="">
      <span>蕊 客</span>
    </div>
    <div class="item huodong">
      <img src="../../../static/images/huodong.png" alt="">
      <span>活 动</span>
    </div>
    <div class="item juwan">
      <img src="../../../static/images/juwan.png" alt="">
      <span>聚 玩</span>
    </div>
    <div class="item dingzhi">
      <img src="../../../static/images/sirendingzhi.png" alt="">
      <span>私 人 定 制</span>
    </div>
    <div class="item zhongchou">
      <img src="../../../static/images/huodongzhongchou.png" alt="">
      <span>活 动 众 筹</span>
    </div>
    <div class="item shouquan">
      <img src="../../../static/images/huodongshouquan.png" alt="">
      <span>活 动 授 权</span>
    </div>
    <div class="item fenxiang">
      <img src="../../../static/images/huodongfenxiang.png" alt="">
      <span>活 动 分 享</span>
    </div>
    <div class="item shequ">
      <img src="../../../static/images/shequ.png" alt="">
      <span>社 区</span>
    </div>
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
      text-align: center;
      // position: relative;
      img{
        display: block;
        margin: 10px auto 0;
        width: 50px;
      }
      span{
        color: #fff;
        font-size: 14px;
      }
    }
    .item1{
      img{
        margin: 55px auto 0;
      }
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
