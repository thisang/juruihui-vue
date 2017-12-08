<template>
  <div class="find">
    <search @result-click="resultClick" :results="results" v-model="searchValue" @on-submit="onSubmit" ref="search"></search>
    <grid>
      <grid-item label="Grid">
        <img class="find-item-icon" slot="icon" src="../../../static/images/today.png">
        <span class="find-item-label" slot="label">今天</span>
      </grid-item>
      <grid-item label="Grid">
        <img class="find-item-icon" slot="icon" src="../../../static/images/nearby.png">
        <span class="find-item-label" slot="label">附近</span>
      </grid-item>
      <grid-item label="Grid">
        <img class="find-item-icon" slot="icon" src="../../../static/images/calendar.png">
        <span class="find-item-label" slot="label">日历</span>
      </grid-item>
    </grid>
    <div class="find-container">
      <activiti-card v-for="(item, index) in activitiList" :key="index" :activiti="item"></activiti-card>
    </div>
  </div>
</template>
<script>
import { Search, Grid, GridItem } from 'vux'
import ActivitiCard from '../../components/activitiCard'
export default {
  components: {
    Search,
    Grid,
    GridItem,
    ActivitiCard
  },
  data () {
    return {
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
      ],
      results: [
        {
          title: 'hallo'
        }
      ],
      searchValue: '' // 搜索框文本
    }
  },
  computed: {
  },
  methods: {
    resultClick () {
      console.log('click result')
    },
    onSubmit () {
      console.log('on submit')
    }
  }
}
</script>
<style lang="scss" scoped>
  .find{
    .find-item-label{
      font-size: 12px;
    }
    .find-container{
      padding: 10px;
    }
  }
</style>
