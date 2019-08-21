<template>
  <div>
    <div class="input-wrapper">
      <input class="input" type="text" placeholder="输入城市名" v-model="value">
    </div>
    <div class="wrapper" ref="wrapper" v-show="this.value">
      <div class="content">
        <div
          class="item border-bottom"
          v-for="(item,index) of list"
          :key="index"
          @click="handleClick(item.name)"
        >{{item.name}}</div>
        <div class="item border-bottom" v-show="!hasData">没有找到城市名，请输入有效的城市名</div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      value: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleClick (city) {
      this.$router.push('/')
      this.$store.dispatch('changeCity', city)
    }
  },
  computed: {
    hasData () {
      return this.list.length
    }
  },
  watch: {
    value () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.value) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const cityList = []
        for (let key in this.cities) {
          this.cities[key].forEach((item) => {
            if (item.spell.indexOf(this.value) > -1 || item.name.indexOf(this.value) > -1) {
              cityList.push(item)
            }
          })
        }
        this.list = cityList
      }, 300)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true })
    })
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/_veriable.scss';
.input-wrapper {
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  background-color: $bgcolor;
  padding: 0.2rem 0.1rem;
  margin-top: -0.1rem;
  .input {
    background-color: #fff;
    border-radius: 0.08rem;
    width: 100%;
    height: 0.62rem;
    text-align: center;
    line-height: 0.62rem;
    color: #666;
    font-size: 0.32rem;
    box-sizing: border-box;
    padding: 0 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.wrapper {
  background-color: #fff;
  position: absolute;
  top: 1.72rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  .item {
    line-height: 0.72rem;
    padding-left: 0.2rem;
    color: #666;
  }
}
</style>
