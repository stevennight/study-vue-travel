<template>
    <div class="list-container" ref="list-container">
      <div class="current-city-container">
        <div class="title">当前城市</div>
        <div class="items">
          <div class="item">
            <div class="item-label">{{currentCity.name}}</div>
          </div>
        </div>
      </div>
      <div class="hot-city-container">
        <div class="title">热门城市</div>
        <div class="items">
          <div class="item" v-for="item of hotCities" :key="item.id"
               @click="changeCurrentCity(item)"
          >
            <div class="item-label">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="alpha-city-container"
           v-for="(alphaCities, key) of cities"
           :key="key"
           :ref="'alpha-'+key"
      >
        <div class="title">{{key}}</div>
        <div class="items">
          <div class="item" v-for="item of alphaCities" :key="item.id"
               @click="changeCurrentCity(item)"
          >
            <div class="item-label">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'List',
  props: {
    hotCities: Array,
    cities: Object,
  },
  computed: {
    ...mapState({
      currentCity: 'currentCity',
      selectedAlpha: (state) => state.city.selectedAlpha,
    }),
  },
  methods: {
    changeCurrentCity(city) {
      this.changeCurrentCityMutation(city);
      this.$router.push({ name: 'home' });
    },
    ...mapMutations({
      changeCurrentCityMutation: 'changeCurrentCity',
    }),
  },
  watch: {
    selectedAlpha(newVal) {
      this.$refs['list-container'].scrollTo(0, this.$refs[`alpha-${newVal}`][0].offsetTop);
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/variables.styl'

  .list-container
    position absolute
    top $headerHeight * 2
    left 0
    right 0
    bottom 0
    overflow auto
    .current-city-container, .hot-city-container
      .title
        background #ddd
        color #666
        padding .12rem .12rem
        border-top .01rem solid #ccc
        border-bottom .01rem solid #ccc
      .items
        padding-right .60rem
        overflow hidden
        .item
          width 33.33%
          float left
          .item-label
            width 100%-.24rem
            margin .12rem 0 .12rem .24rem
            text-align center
            line-height .56rem
            border .01rem solid #ccc
            border-radius .12rem
    .alpha-city-container
      .title
        background #ddd
        color #666
        padding .12rem .12rem
        border-top .01rem solid #ccc
        border-bottom .01rem solid #ccc
      .item
        padding .24rem
        border-bottom .01rem solid #ccc
</style>
