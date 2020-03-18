<template>
    <div class="head-container">
      <div class="back-bubble" @click="clickBackButton"><i class="iconfont">&#xe640;</i></div>
      <div class="head-bar" v-show="headBarShow" :style="{opacity: headBarOpacity}">
        <div class="head-title">{{sightName}}</div>
        <div class="head-back" @click="clickBackButton"><i class="iconfont">&#xe640;</i></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    sightName: String,
  },
  data() {
    return {
      headBarShow: false,
      headBarOpacity: 0,
    };
  },
  methods: {
    clickBackButton() {
      this.$router.back();
    },
    windowScroll() {
      const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
        document.scrollingElement.scrollTop,
      );
      console.log(scrollTop);
      // 140， header-bar完全显示。
      let opacity = scrollTop / 140;
      opacity = Math.max(opacity, 0);
      opacity = Math.min(opacity, 100);
      this.headBarShow = opacity > 0;
      this.headBarOpacity = opacity;
    },
  },
  activated() {
    window.addEventListener('scroll', this.windowScroll);
    console.log('添加scroll事件监听');
  },
  deactivated() {
    window.removeEventListener('scroll', this.windowScroll);
    console.log('移除scroll事件监听');
  },
};
</script>

<style lang="stylus" scoped>
  @import "~@/assets/style/variables.styl"

  .back-bubble
    position absolute
    top .12rem
    left .12rem
    width .48rem
    height .48rem
    line-height .48rem
    border-radius .24rem
    text-align center
    font-size .32rem
    color white
    background rgba(0,0,0,0.6)
  .head-bar
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    background $mainColor
    color white
    text-align center
    .head-back
      position absolute
      top 0
      left 0
      height $headerHeight
      line-height $headerHeight
      width .64rem
</style>
