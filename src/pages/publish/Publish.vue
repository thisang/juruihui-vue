<template>
  <div class="publish">
    <div class="publish-item activiti" @click="toPublish('activiti')">
      <img src="../../../static/images/huodong.png" alt="">
      <span class="publish-title">活&nbsp;&nbsp;&nbsp;&nbsp;动</span>
    </div>
    <div class="publish-item play" @click="toPublish('play')">
      <img src="../../../static/images/juwan.png" alt="">
      <span class="publish-title">聚&nbsp;&nbsp;&nbsp;&nbsp;玩</span>
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
    toPublish (type) {
      this.$router.push({
        name: 'PublishActiviti',
        query: {
          type: type
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .publish{
    padding: 5px;
    display: flex;
    flex-direction: column;
    .publish-item{
      margin: 5px;
      display: flex;
      flex: 1;
      background-color: #eb8256;
      flex-direction: column;
      align-items: center;
      img{
        margin-top: 10px;
        width: 150px;
      }
    }
    .publish-title{
      margin-top: 10px;
      font-size: 20px;
      text-align: center;
      color: #fff;
    }
    .activiti{
      background-color: #E87986;
    }
    .play{
      background-color: #AFD782;
    }
  }
</style>
