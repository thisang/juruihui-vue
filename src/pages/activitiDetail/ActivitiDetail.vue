<template>
  <div class="activiti-detail">
    <x-header title="北京动漫嘉年华"></x-header>
    <div class="acticiti-detail-container">
      <div class="activiti-head">
        <img class="activiti-img" src="../../../static/images/cbd.jpg" alt="">
        <span class="card-tags">
          <span class="tag">
            <i >动漫</i>
          </span>
          <span class="read">浏览 1234</span>
        </span>
        <span class="card-appaly">
          <i class="css-tag"></i>
          <i class="appaly">可报名</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  }
}
</script>
<style lang="scss" scoped>
  .activiti-detail{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .acticiti-detail-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
    .activiti-head{
      width: 100%;
      height: 150px;
      position: relative;
      overflow: hidden;
      .activiti-img{
        width: 100%;
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
  }
</style>
