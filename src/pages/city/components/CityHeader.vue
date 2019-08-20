<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-left">
      <span class="icon-back iconfont">&#xe682;</span>
    </router-link>
    <div class="header-right">
      <div>城市选择</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="scss" scoped>
@import 'styles/_veriable.scss';
.header {
  position: relative;
  z-index: 10;
  background-color: $bgcolor;
  width: 100%;
  height: 0.84rem;
  text-align: center;
  line-height: 0.84rem;
  border-color: $bgcolor;
  .header-left {
    position: absolute;
    left: 0;
    display: flex;
    width: 0.64rem;
    height: 0.64rem;
    padding: 0.1rem;
    color: #fff;
    align-content: center;
    justify-content: center;
    .icon-back {
      margin-top: -0.1rem;
      font-size: 0.5rem;
    }
  }
  .header-right {
    color: #fff;
    font-size: 0.32rem;
  }
}
</style>
