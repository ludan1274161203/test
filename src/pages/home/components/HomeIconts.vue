<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) of list" :key="index">
        <div class="items" v-for="item of items" :key="item.id">
          <div class="img-wrapper">
            <img class="img" :src="item.imgUrl" alt="图片加载失败">
          </div>
          <div class="desc-wrapper">
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIconts',
  props: {
    iconList: Array,
    swiperOption: {
      loop: true
    }
  },
  computed: {
    list () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  margin-top: 0.06rem;
  width: 100%;
  position: relative;
  .items {
    position: relative;
    float: left;
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .img-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0.44rem;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0.1rem 0;
      .img {
        height: 100%;
      }
    }
    .desc-wrapper {
      position: absolute;
      bottom: 0.1rem;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
}
</style>
