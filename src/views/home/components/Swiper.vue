<template>
    <div class="swiper-container">
        <swiper :options="swiperOptions" class="swiper" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide">
                <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
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
