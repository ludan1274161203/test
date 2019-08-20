<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="item" v-for="item of weekendList" :key="item.id">
      <div class="img-wrapper">
        <img class="img" :src="item.imgUrl" alt="图片加载失败">
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-top: 0.1rem;
  padding-left: 0.16rem;
  background-color: #eee;
  height: 0.68rem;
  line-height: 0.68rem;
}
.item {
  padding: 0.1rem;
  margin-bottom: 0.3rem;
  .img-wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 37.09%;
    .img {
      width: 100%;
    }
  }
  .item-info {
    padding: 0.1rem;
    height: 0.44rem;
    line-height: 0.44rem;
    .item-desc {
      color: #ccc;
    }
  }
}
</style>
