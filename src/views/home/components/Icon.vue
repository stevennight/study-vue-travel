<template>
  <swiper :options="swiperOptions" class="icon-container" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-slide" v-for="( page, index ) of iconPage" :key="index">
      <div class="icon-wrapper" v-for="item of page" :key="item.id">
        <div class="icon">
          <img :src="item.imgUrl">
        </div>
        <div class="title">{{item.desc}}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
      },
    };
  },
  computed: {
    iconPage() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = parseInt(index / 8, 10);
        if (!pages[page]) pages[page] = [];
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .icon-container
    height 0
    padding-bottom 50%
    overflow hidden
    .icon-wrapper
      float left
      width 25%
      height 0
      padding-bottom 25%
      overflow hidden
      position relative
      .title
        position absolute
        left 0
        right 0
        bottom 0
        height .32rem
        line-height .32rem
        text-align center
      .icon
        width 100%
        position absolute
        top .12rem
        left 0
        right 0
        bottom .32rem
        img
          max-width 100%
          max-height 100%
          margin auto
          display block
</style>
