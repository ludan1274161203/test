<template>
  <div>
    <div>
      <div class="title">热销推荐</div>
      <div class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-left">
          <img class="img" :src="item.imgUrl">
        </div>
        <div class="item-right">
          <div>{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <router-link to="/detail">
            <button class="btn-class">查看详情</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
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
  display: flex;
  .item-left {
    float: left;
    width: 1.7rem;
    height: 1.7rem;
    .img {
      width: 100%;
    }
  }
  .item-right {
    flex: auto;
    padding-top: 0.1rem;
    margin-left: 0.2rem;
    height: 0.46rem;
    line-height: 0.46rem;
    .item-desc {
      color: #ccc;
    }
    .btn-class {
      margin-top: 0.1rem;
      padding: 0 0.1rem;
      background-color: #ff8000;
      color: #fff;
      border-radius: 0.06rem;
    }
  }
}
</style>
