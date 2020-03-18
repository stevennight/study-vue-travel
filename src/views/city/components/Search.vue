<template>
    <div class="search-container">
      <div class="search-input">
        <div class="input-wrapper">
          <input v-model="inputKey" placeholder="输入城市名或拼音" />
        </div>
      </div>
      <div class="result-container" v-show="inputKey">
        <div class="item" v-for="item of searchResult" :key="item.id">{{item.name}}</div>
        <div class="item" v-show="showNoResult">无搜索结果</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    cities: Object,
  },
  data() {
    return {
      inputKey: '',
      searchResult: [],
    };
  },
  computed: {
    showNoResult() {
      return this.searchResult.length < 1;
    },
  },
  watch: {
    inputKey() {
      const result = [];
      const { inputKey } = this;
      Object.keys(this.cities).forEach((alpha) => {
        const list = this.cities[alpha];
        list.forEach((city) => {
          if (city.name.indexOf(inputKey) > -1 || city.spell.indexOf(inputKey.toLowerCase()) > -1) {
            result.push(city);
          }
        });
      });
      this.searchResult = result;
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/variables.styl'
  .search-container
    .result-container
      position absolute
      top $headerHeight * 2
      left 0
      right 0
      bottom 0
      overflow auto
      background #eee
      z-index 2
      .item
        padding .24rem
        border-bottom .01rem solid #ccc
    .search-input
      background $mainColor
      height $headerHeight
      .input-wrapper
        width 100%
        height $headerHeight - .12rem
        line-height $headerHeight - .12rem
        padding .06rem
        box-sizing border-box
        input
          width 100%
          height 100%
          box-sizing border-box
          text-align center
          border none
          border-radius .06rem
</style>
