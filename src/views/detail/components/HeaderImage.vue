<template>
    <div class="header-image-container">
      <div @click="changeAlbumDisplay(true)">
        <div class="image-swipper">
          <img :src="bannerImg">
        </div>
        <div class="info">
          <div class="info-title">{{sightName}}</div>
          <div class="info-number">{{gallaryImgs.length}}</div>
        </div>
      </div>
      <album-component
        :images="gallaryImgs"
        :display="albumDisplay"
        @click.native="changeAlbumDisplay(false)"
      ></album-component>
    </div>
</template>

<script>
import AlbumComponent from '@/components/Album.vue';

export default {
  name: 'HeaderImage',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
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
