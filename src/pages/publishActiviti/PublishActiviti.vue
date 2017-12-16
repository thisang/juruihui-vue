<template>
  <div class="publish-activiti">
    <x-header :title="publishType"></x-header>
    <div class="publish-activiti-container">
      <p class="info">PC端发布更便捷!!~</p>
      <div class="upload-img">
        <p>点击上传图片</p>
      </div>
      <group>
        <x-input title="活动标题" v-model="activitiInfo.title" placeholder="请输入活动标题"></x-input>
        <x-input title="开始时间" v-model="activitiInfo.startDate" placeholder="请输入开始时间"></x-input>
        <x-input title="结束时间" v-model="activitiInfo.endDate" placeholder="请输入结束时间"></x-input>
        <x-input title="活动地点" v-model="activitiInfo.site" placeholder="请输入活动地点"></x-input>
        <x-input title="活动主题" v-model="activitiInfo.site" placeholder="请输入活动主题"></x-input>
        <x-input title="活动形式" v-model="activitiInfo.type" placeholder="请输入活动形式"></x-input>
        <x-textarea title="活动详情" v-model="activitiInfo.information" placeholder="请输入活动详情描述"></x-textarea>
        <cell title="活动费用" is-link></cell>
        <cell title="报名设置" is-link></cell>
      </group>
      <div class="p10 mt5">
        <x-button type="primary" class="jrh-primary-btn" @click.native="publish">发布</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader, Group, XInput, XTextarea, Cell, XButton } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    XInput,
    XTextarea,
    Cell,
    XButton
  },
  data () {
    return {
      activitiInfo: {
        title: '',
        startDate: '',
        endDate: '',
        site: '',
        type: '',
        theme: '',
        information: ''
      },
      publishType: ''
    }
  },
  methods: {
    publish () {
      this.$vux.loading.show({
        text: '正在发布'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.$vux.toast.show({
          text: '发布成功',
          type: 'success'
        })
        this.$router.go(-1)
      }, 1000)
    },
    publishTypeToText (publishType) {
      switch (publishType) {
        case 'activiti':
          this.publishType = '活动'
          break
        case 'play':
          this.publishType = '聚玩'
          break
      }
    }
  },
  mounted () {
    this.publishTypeToText(this.$route.query.type)
  }
}
</script>
<style lang="scss" scoped>
  .publish-activiti{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .publish-activiti-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
    .info{
      padding: 5px 15px;
      color: #999;
      font-size: 10px;
      background-color: #eee;
    }
    .upload-img{
      margin: 10px;
      border: 1px solid #999;
      height: 150px;
      display: flex;
      align-items: center;
      p{
        text-align: center;
        font-size: 12px;
        color: #999;
        flex: 1;
      }
    }
  }
</style>
