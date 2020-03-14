<template>
    <div class="near-travel-container">
      <div class="title">
        周末去哪儿
      </div>
      <div class="list">
        <div class="item" v-for="item of list" :key="item.id">
          <div class="item-image">
            <img :src="item.imgUrl" />
          </div>
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NearTravel',
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
  .near-travel-container
    .title
      height .32rem
      line-height .32rem
      background #ccc
      padding .12rem .24rem
    .list
      .item
        padding-bottom .12rem
        .item-image
          height 0
          padding-bottom 33.43%
          overflow hidden
          img
            width 100%
        .item-title
          font-size .32rem
          height .72rem
          line-height .72rem
          padding 0 .12rem
        .item-desc
          font-size .24rem
          color #ccc
          padding 0 .12rem
          height .24rem
          line-height .24rem
</style>
