<template>
    <div class="head-container">
      <div class="title">城市选择</div>
      <router-link tag="div" to="/" class="btn-back"><i class="iconfont">&#xe640;</i></router-link>
    </div>
</template>

<script>
export default {
  name: 'Head',
};
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/variables.styl'

  .head-container
    .title
      height $headerHeight
      line-height $headerHeight
      color white
      background $mainColor
      text-align center
    .btn-back
      position absolute
      top 0
      left 0
      height $headerHeight
      line-height $headerHeight
      width .64rem
      text-align center
      color white
</style>
