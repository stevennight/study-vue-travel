<template>
    <div class="search-container">
      <div class="search-input">
        <div class="input-wrapper">
          <input placeholder="输入城市名或拼音" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/variables.styl'
  .search-container
    .search-input
      background $mainColor
      height $headerHeight
      .input-wrapper
        width 100%
        line-height $headerHeight - .24rem
        padding .12rem
        box-sizing border-box
        input
          width 100%
          height 100%
          box-sizing border-box
          text-align center
</style>
