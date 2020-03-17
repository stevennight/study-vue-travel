<template>
    <div class="header-image-container">
      <div @click="changeAlbumDisplay(true)">
        <div class="image-swipper">
          <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
        </div>
        <div class="info">
          <div class="info-title">大连圣亚海洋世界(AAAA景区)</div>
          <div class="info-number">2</div>
        </div>
      </div>
      <album-component
        :display="albumDisplay"
        @click.native="changeAlbumDisplay(false)"
      ></album-component>
    </div>
</template>

<script>
import AlbumComponent from '@/components/Album.vue';

export default {
  name: 'HeaderImage',
  data() {
    return {
      albumDisplay: false,
    };
  },
  components: {
    AlbumComponent,
  },
  methods: {
    changeAlbumDisplay(display) {
      this.albumDisplay = display;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .header-image-container
    position relative
    .image-swipper
      width 100%
      height 0
      padding-bottom 55%
      overflow hidden
      img
        width 100%
    .info
      position absolute
      height .48rem
      line-height .48rem
      padding 0 .12rem
      left 0
      right 0
      bottom 0
      display flex
      color white
      background-image linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .info-title
        flex 1
        min-width 0
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        font-size .32rem
      .info-number
        width .80rem
        height .32rem
        line-height .32rem
        margin-top .08rem
        font-size .24rem
        text-align center
        background linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))
        border-radius .24rem
</style>
