<template>
  <div class="recommand-container">
    <div class="title">
      热销推荐
    </div>
    <div class="items">
      <div class="item" v-for="item of list" :key="item.id">
        <div class="item-image">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-desc">{{item.desc}}</div>
          <router-link
            tag="div"
            :to="{name: 'detail', params: {id: item.id}}"
            class="info-btn"
          >
            查看详情
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommand',
  props: {
    list: Array,
  },
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
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .info-title
            font-size .40rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
    .title
      height .32rem
      line-height .32rem
      background #ccc
      padding .12rem .24rem
</style>
