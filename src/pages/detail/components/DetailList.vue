<template>
  <div>
    <div class="title border-bottom" v-for="(item,index) of categoryList" :key="index">
      {{item.title}}
      <detail-list :categoryList="item.children"></detail-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: ['categoryList']
}
</script>
<style lang="scss" scoped>
.border-bottom {
  border-color: #aaa;
}
.title {
  line-height: 0.68rem;
  margin-left: 0.2rem;
}
</style>
