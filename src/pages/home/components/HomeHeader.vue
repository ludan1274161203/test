<template>
  <div class="header">
    <div class="header-left">
      <span class="icon-back iconfont">&#xe682;</span>
    </div>
    <div class="header-input">
      <span class="icon-search iconfont">&#xe607;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      杭州
      <span class="icon-down iconfont">&#xe65a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss" scoped>
@import 'styles/_veriable.scss';
.header {
  background-color: $bgcolor;
  width: 100%;
  display: flex;
  justify-content: center;
  .header-left {
    display: flex;
    float: left;
    width: 0.64rem;
    height: 0.64rem;
    padding: 0.1rem 0.1rem;
    color: #fff;
    align-content: center;
    justify-content: center;
    .icon-back {
      margin-top: 0.1rem;
      font-size: 0.5rem;
    }
  }
  .header-input {
    box-sizing: border-box;
    flex: auto;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.1rem;
    padding-left: 0.1rem;
    background-color: #fff;
    border-radius: 0.08rem;
    font-size: 0.28rem;
    color: #ccc;
    .icon-search {
      position: relative;
      left: 0.1rem;
      top: 0.08rem;
      font-size: 0.4rem;
      margin-left: -0.1rem;
    }
  }
  .header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.04rem;
    padding: 0.1rem 0.1rem;
    color: #fff;
    font-size: 0.32rem;
    .icon-down {
      font-size: 0.2rem;
      position: relative;
      left: 0.07rem;
    }
  }
}
</style>
