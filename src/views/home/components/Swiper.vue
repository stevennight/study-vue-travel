<template>
    <div class="swiper-container">
        <swiper :options="swiperOptions" class="swiper" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide" v-for="item of list" :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
    .swiper-container >>> .swiper-pagination-bullet-active
      background white
    .swiper-container
        height 0
        padding-bottom 31.25%
        overflow hidden
        background #ccc
        .swiper
            width 100%
            .swiper-slide
                width 100%
                img
                    width 100%
</style>
