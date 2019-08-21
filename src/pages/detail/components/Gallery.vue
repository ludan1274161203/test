<template>
  <div class="wrapper" v-show="showGallery" @click="closeGallery">
    <swiper class="gallery-swiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
        <img class="swiper-img" :src="item" alt="图片加载失败">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import Bus from '@/common/EventBus.js'
export default {
  name: 'Gallery',
  props: ['gallaryImgs'],
  data () {
    return {
      swiperOptions: {
        loop: true
      },
      showGallery: false
    }
  },
  methods: {
    closeGallery () {
      if (this.showGallery) {
        this.showGallery = false
      }
    }
  },
  mounted () {
    Bus.$on('changeGallery', () => {
      this.showGallery = true
    })
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #333;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  .gallery-swiper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-color: #ccc;
    .swiper-img {
      width: 100%;
    }
  }
}
</style>
