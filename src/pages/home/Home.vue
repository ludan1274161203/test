<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-iconts :iconList="iconList"></home-iconts>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIconts from './components/HomeIconts'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIconts,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getInfo () {
      this.axios.get('/static/mock/index.json').then((result) => {
        const res = result.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      })
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="scss" scoped>
</style>
