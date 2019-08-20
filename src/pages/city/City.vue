<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-alpha :cities="cities"></city-alpha>
  </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlpha from './components/CityAlpha'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlpha
  },
  methods: {
    getInfo () {
      this.axios.get('/static/mock/city.json').then((result) => {
        const res = result.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotCities = data.hotCities
          this.cities = data.cities
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
