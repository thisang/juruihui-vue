<template>
  <div class="activiti-list">
    <x-header title="所有活动">
      <span slot="right" @click="showPopup = true">关键词</span>
    </x-header>
    <div class="activiti-list-container">
      <activiti-card v-for="(item, index) in activitiList" :key="index" :activiti="item"></activiti-card>
      <popup v-model="showPopup" position="right" width="100%">
        <x-header title="关键词" :leftOptions="leftOption" @on-click-back="showPopup = false">
          <span slot="right" @click="searchKeyWord">搜索</span>
        </x-header>
        <div class="keyword-inner-page">
          <search @result-click="resultClick" :results="results" v-model="searchValue" @on-submit="onSubmit" ref="search"></search>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, Popup, Search } from 'vux'
import ActivitiCard from '../../components/activitiCard'
export default {
  components: {
    XHeader,
    Popup,
    Search,
    ActivitiCard
  },
  data () {
    return {
      results: [
        {
          title: 'hallo'
        }
      ],
      searchValue: '', // 搜索框文本
      leftOption: {
        showBack: true,
        backText: '返回',
        preventGoBack: true
      },
      showPopup: false,
      activitiList: [
        {
          title: '第十七届中国北京动漫嘉年华IDO17',
          time: '2016年08月23日 08:00',
          locationArea: '朝阳区',
          locationPosition: '天辰东路7号国家会议中心',
          locationDistance: '1.1km',
          avatarUrl: '',
          likes: 3,
          userLiked: false,
          isApplay: true,
          tags: ['动漫', '嘉年华'],
          read: 4
        },
        {
          title: '第十七届中国北京动漫嘉年华IDO17',
          time: '2016年08月23日 08:00',
          locationArea: '朝阳区',
          locationPosition: '天辰东路7号国家会议中心',
          locationDistance: '1.1km',
          avatarUrl: '',
          likes: 3,
          userLiked: true,
          isApplay: false,
          tags: ['动漫'],
          read: 4
        },
        {
          title: '第十七届中国北京动漫嘉年华IDO17',
          time: '2016年08月23日 08:00',
          locationArea: '朝阳区',
          locationPosition: '天辰东路7号国家会议中心',
          locationDistance: '1.1km',
          avatarUrl: '',
          likes: 3,
          userLiked: true,
          isApplay: false,
          tags: ['动漫'],
          read: 4
        },
        {
          title: '第十七届中国北京动漫嘉年华IDO17',
          time: '2016年08月23日 08:00',
          locationArea: '朝阳区',
          locationPosition: '天辰东路7号国家会议中心',
          locationDistance: '1.1km',
          avatarUrl: '',
          likes: 3,
          userLiked: true,
          isApplay: false,
          tags: ['动漫'],
          read: 4
        }
      ]
    }
  },
  methods: {
    resultClick () {
      console.log('click result')
    },
    onSubmit () {
      console.log('on submit')
    },
    searchKeyWord () {
      this.showPopup = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .activiti-list{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .activiti-list-container{
      overflow: auto;
      flex: 1;
      height: 100%;
      padding: 10px;
    }
  }
</style>
