<template>
  <div class="alpha-wrapper">
    <div class="alpha-item" v-for="(value,key) of cities" :key="key" @click="handleClick">{{key}}</div>
  </div>
</template>
<script>
import Bus from '@/common/EventBus.js'
export default {
  name: 'CityAlpha',
  props: {
    cities: Object
  },
  methods: {
    handleClick (event) {
      let traget = event.target || event.srcElement
      Bus.$emit('changeWord', traget.innerHTML)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/_veriable.scss';
.alpha-wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0.18rem;
  top: 3rem;
  z-index: 1;
  .alpha-item {
    line-height: 0.4rem;
    color: $bgcolor;
  }
}
</style>
