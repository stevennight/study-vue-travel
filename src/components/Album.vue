<template>
    <div class="album-container" v-show="display">
      <swiper :options="swiperOptions" class="swiper">
        <swiper-slide class="swiper-slide" v-for="(image, index) of images" :key="index">
          <img :src="image">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'album',
  props: {
    display: {
      type: Boolean,
      default: true,
    },
    images: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom(_, current, total) {
            return `<div>${current}/${total}</div>`;
          },
        },
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination
    display flex
    justify-content center
    div
      color white
      background rgba(0,0,0,0.6)
      padding .06rem .12rem
      border-radius .2rem
  .album-container
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background black
    z-index 99
    .swiper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        //纵向居中
        display flex
        flex-direction column
        justify-content center
        img
          display block //使用margin auto必须为block
          max-width 100%
          max-height 100%
          margin auto //横向居中
</style>
