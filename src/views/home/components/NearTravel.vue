<template>
    <div class="near-travel-container">
      <div class="title">
        周末去哪儿
      </div>
      <div class="list">
        <div class="item">
          <div class="item-image">
            <img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" />
          </div>
          <div class="item-title">北京温泉排行</div>
          <div class="item-desc">北京温泉排行</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NearTravel',
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
