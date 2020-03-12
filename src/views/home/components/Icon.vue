<template>
  <swiper :options="swiperOptions" class="icon-container" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-slide">
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="icon-wrapper">
        <div class="icon">
          <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <div class="title">test</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
      swiperOptions: {
      },
    };
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
