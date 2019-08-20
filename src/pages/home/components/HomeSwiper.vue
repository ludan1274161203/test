<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="header-swiper">
      <swiper-slide v-for="(item) of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="图片加载失败">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #ccc;
  .header-swiper {
    width: 100%;
    .swiper-img {
      width: 100%;
    }
  }
}
</style>
