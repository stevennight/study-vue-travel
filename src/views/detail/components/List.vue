<template>
    <div>
      <div class="list-container" v-for="(item, index) of categoryList" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="children">
          <List :categoryList="item.children"></List>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    categoryList: Array,
  },
};
</script>

<style lang="stylus" scoped>
  .list-container
    line-height .48rem
    .title
      padding-left .24rem
      border-bottom .01rem solid #ccc
    .children
      margin-left .24rem
</style>
