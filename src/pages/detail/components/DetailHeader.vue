<template>
  <div class="wrapper">
    <div class="header" v-show="!showItem">城市详情</div>
    <router-link tag="div" to="/" class="back-wrapper" v-show="showItem" :style="opcityOPtions">
      <div class="back-icon iconfont">&#xe682;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showItem: true,
      opcityOPtions: {
        opcity: 0
      }
    }
  },
  methods: {
    scrollHandle () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showItem = false
        if (top < 140) {
          this.opcityOPtions.opcity = top / 140
        }
      } else {
        this.showItem = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandle)
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/_veriable.scss';
.wrapper {
  width: 100%;
  height: 30rem;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: $bgcolor;
    width: 100%;
    height: 0.84rem;
    text-align: center;
    line-height: 0.84rem;
    border-color: $bgcolor;
    color: #fff;
  }
  .back-wrapper {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    background-color: #222;
    opacity: 0.8;
    border-radius: 0.4rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .back-icon {
      font-size: 0.48rem;
    }
  }
}
</style>
