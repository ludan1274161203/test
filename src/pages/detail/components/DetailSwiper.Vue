<template>
  <div>
    <div class="banner-wrapper" @click="handleClick">
      <img class="banner-img" :src="bannerImg">
      <div class="sightName">{{sightName}}</div>
    </div>
  </div>
</template>
<script>
import Bus from '@/common/EventBus.js'
export default {
  name: 'DetailSwiper',
  props: ['sightName', 'bannerImg'],
  methods: {
    handleClick () {
      Bus.$emit('changeGallery')
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-wrapper {
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  background-color: #ccc;
  .banner-img {
    width: 100%;
  }
  .sightName {
    position: absolute;
    left: 0.2rem;
    bottom: 0.1rem;
    color: #fff;
    opacity: 0.8;
  }
}
</style>
