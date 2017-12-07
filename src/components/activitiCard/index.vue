<template>
  <div class="activiti-card">
    <div class="img-top">
      
    </div>
    <div class="main-text">
      <p class="activiti-title">第十七届中国北京动漫嘉年华IDO17</p>
      <p class="activiti-info">
        <i class="iconfont icon-position"></i>
        <span>2016年08月23日 08:00</span>
      </p>
      <p class="activiti-info">
        <i class="iconfont icon-position"></i>        
        <span>朝阳区</span>
        <span>天辰东路7号国家会议中心</span>
        <span>- 1.1km</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActivitiCard'
}
</script>
<style lang="scss" scoped>
  .activiti-card{
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 1px 3px -1px rgba(0,0,0,.3);
    .img-top{
      width: 100%;
      height: 110px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      background: url('./images/cbd.jpg') center no-repeat / 100%;
    }
    .main-text{
      padding: 5px;
      .activiti-title{
        font-size: 14px;
        margin-bottom: 3px;
      }
      .activiti-info{
        i{
          font-size: 12px;
          color: #333;
        }
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>

