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
      <activiti-card></activiti-card>
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
