<template>
  <div class="activiti-card" @click="view">
    <div class="img-top">
      <img class="card-avatar" src="./images/ang.jpg" alt="">
      <div class="card-like">
        <i class="iconfont icon-liked" v-if="activiti.userLiked"></i>
        <i class="iconfont icon-like" v-else></i>
        <span class="like-num">{{activiti.likes}}</span>
      </div>
      <span class="card-tags">
        <span class="tag">
          <i v-for="(tag, index) in activiti.tags" :key="index">{{index === 0 ? '' : '&'}}{{tag}}</i>
        </span>
        <span class="read">浏览 {{activiti.read}}</span>
      </span>
      <span class="card-appaly">
        <i class="css-tag"></i>
        <i class="appaly">{{activiti.isApplay ? '可报名' : '不可报名'}}</i>
      </span>
    </div>
    <div class="main-text">
      <p class="activiti-title">{{activiti.title}}</p>
      <p class="activiti-info">
        <i class="iconfont icon-position"></i>
        <span>{{activiti.time}}</span>
      </p>
      <p class="activiti-info">
        <i class="iconfont icon-position"></i>        
        <span>{{activiti.locationArea}}</span>
        <span>{{activiti.locationPosition}}</span>
        <span>- {{activiti.locationDistance}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActivitiCard',
  props: {
    activiti: {
      type: Object,
      required: true
    }
  },
  methods: {
    view () {
      this.$emit('on-view-acticiti')
      this.$router.push({
        name: 'ActivitiDetail'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .activiti-card{
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 1px 3px -1px rgba(0,0,0,.3);
    position: relative;
    margin-bottom: 10px;
    .img-top{
      width: 100%;
      height: 110px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      background: url('./images/cbd.jpg') center no-repeat / 100%;
      position: relative;
      .card-avatar{
        width: 30px;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
      }
      .card-like{
        position: absolute;
        right: 10px;
        top: 0px;
        i{
          color: #eb8256;
        }
        .like-num {
          position: relative;
          color: #fff;
          top: -1px;
        }
      }
      .card-tags{
        position: absolute;
        bottom: 5px;
        left: 5px;
        color: #fff;
        font-size: 10px;
        .tag{
          background-color: #eb8256;
          padding: 1px 5px;
          border-radius: 3px;
        }
      }
      .card-appaly{
        position: absolute;
        bottom: 5px;
        right: 0;
        .css-tag{
          position: absolute;
          display: inline-block;
          border-width: 10px;
          border-style: solid;
          border-left-color: transparent;
          border-width: 10px;
          color: #eb8256;
          left: -12px;
          border-width: 9px;
        }
        .appaly{
          z-index: 2;
          position: relative;
          padding: 1px 3px 1px 0;
          color: #fff;
          background-color: #eb8256;
        }
      }
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

