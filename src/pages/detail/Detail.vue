<template>
  <div>
    <detail-swiper :sightName="sightName" :bannerImg="bannerImg"></detail-swiper>
    <gallery :gallaryImgs="gallaryImgs"></gallery>
    <detail-list :categoryList="categoryList"></detail-list>
    <detail-header></detail-header>
  </div>
</template>
<script>
import DetailSwiper from './components/DetailSwiper'
import Gallery from './components/Gallery'
import DetailList from './components/DetailList'
import DetailHeader from './components/DetailHeader'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailSwiper,
    Gallery,
    DetailList,
    DetailHeader
  },
  methods: {
    getInfo () {
      this.axios.get('/static/mock/detail.json').then((result) => {
        const res = result.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
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
