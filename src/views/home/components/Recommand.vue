<template>
  <div class="recommand-container">
    <div class="title">
      热销推荐
    </div>
    <div class="items">
      <div class="item">
        <div class="item-image">
          <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg">
        </div>
        <div class="item-info">
          <div class="info-title">title</div>
          <div class="info-desc">info</div>
          <div class="info-btn">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommand',
};
</script>

<style lang="stylus" scoped>
  @import "~@/assets/style/variables.styl"

  .recommand-container
    margin-top .12rem
    .items
      .item
        display flex
        .item-image
          width 1.9rem
          padding .12rem
          float left
          img
            width 100%
        .item-info
          flex 1
          min-width 0
          padding .12rem
          div
            line-height .62rem
            height .62rem
          .info-btn
            color white
            background $mainColor
            border-radius .06rem
            padding 0 .12rem
            width 1.28rem
            text-align center
          .info-desc
            color #666
          .info-title
            font-size .40rem
    .title
      height .32rem
      line-height .32rem
      background #ccc
      padding .12rem .24rem
</style>
