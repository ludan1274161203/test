<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <div>
        <div class="title">当前城市</div>
        <div class="button-list">
          <router-link class="button-wrapper" tag="div" to="/">
            <div class="button">{{this.city}}</div>
          </router-link>
        </div>
      </div>
      <div>
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="alpha-arae" v-for="(value,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="items">
          <div
            class="item border-bottom"
            v-for="(item,index) of value"
            :key="index"
            @click="handleClick(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '@/common/EventBus.js'
import BScroll from 'better-scroll'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  data () {
    return {
      letter: ''
    }
  },
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  },
  methods: {
    handleClick (city) {
      this.$router.push('/')
      this.changeCity(city)
    },
    ...mapActions(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true })
    })
    Bus.$on('changeWord', (word) => {
      this.letter = word
    })
  },
  beforeDestroy () {
    Bus.$off('changeWord')
  }
}
</script>
<style lang="scss" scoped>
.border-bottom:before {
  border-color: #ccc;
}
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 1.73rem;
  right: 0;
  bottom: 0;
  left: 0;
  .title {
    padding-left: 0.2rem;
    background-color: #eee;
    height: 0.46rem;
    line-height: 0.46rem;
    color: #666;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      box-sizing: border-box;
      float: left;
      padding: 0 0.2rem;
      margin: 0.2rem 0;
      width: 33.3%;
      overflow: hidden;
      .button {
        padding: 0.1rem;
        font-size: 0.3rem;
        color: #666;
        border: 1px solid #ccc;
        border-radius: 0.08rem;
        text-align: center;
      }
    }
  }
  .alpha-arae {
    .items {
      .item {
        line-height: 0.72rem;
        padding-left: 0.2rem;
        color: #666;
      }
    }
  }
}
</style>
