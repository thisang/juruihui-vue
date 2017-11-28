<template>
  <div class="city-list">
    <x-header title="选择城市"></x-header>
    <div class="city-list-container">
      <div class="citys-item" v-for="(item, index) in cityData" :key="index">
        <p class="city-title">{{item.title}}</p>
        <div class="citys" :class="{'vux-1px-b' : index !== cityData.length - 1}">
          <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/4" v-for="(city, key) in item.list" :key="key">
              <div class="city" @click="clickCity(city)">
                <span :class="{'now-city' : nowCity === city}">{{city}}</span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { XHeader, Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      cityData: [
        {
          title: '定位城市',
          list: ['全国']
        },
        {
          title: '热门城市',
          list: ['全国', '北京', '成都', '大连', '广州', '杭州', '南京', '上海', '深圳', '苏州', '天津', '武汉', '西安']
        },
        {
          title: 'ABCDEF',
          list: ['北京', '长春', '长沙', '成都', '重庆', '大连', '大庆', '佛山', '福州']
        },
        {
          title: 'GHIJ',
          list: ['广州', '贵阳', '哈尔滨', '海口', '海外', '杭州', '合肥', '济南']
        },
        {
          title: 'KLMN',
          list: ['昆明', '兰州', '南昌', '南京', '南宁', '宁波']
        },
        {
          title: 'OPQR',
          list: ['澳门', '青岛']
        },
        {
          title: 'STUV',
          list: ['上海', '韶关', '深圳', '沈阳', '石家庄', '苏州', '太原', '天津']
        },
        {
          title: 'WXYZ',
          list: ['无锡', '武汉', '厦门', '西安', '香港', '郑州', '珠海']
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentCityStatus'
    ]),
    nowCity () {
      return this.currentCityStatus
    }
  },
  methods: {
    ...mapMutations([
      'CURRENT_CITY'
    ]),
    clickCity (city) {
      this.$vux.loading.show({
        text: '正在切换',
        width: '50%'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.CURRENT_CITY(city)
        this.$vux.toast.show({
          text: `当前城市:${city}`,
          type: 'success',
          width: '50%'
        })
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
  .city-list{
    .city-list-container{
      margin-top: 46px;
      padding:10px 0;
      .citys-item{
        .city-title{
          margin: 5px 0;
          padding: 0 15px;
          color: #33a9ff;
          font-size: 12px;
        }
      }
      .city {
        text-align: center;
        background-clip: padding-box;
        margin: 5px 0;
        .now-city{
          background-color: #eb8256;
          color: #fff;
          border-radius: 4px;
          padding: 1px 4px;
        }
      }
    }
  }
</style>
