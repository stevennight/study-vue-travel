<template>
    <div class="alpha-container">
      <div class="alpha">A</div>
      <div class="alpha">B</div>
    </div>
</template>

<script>
export default {
  name: 'Alpha',
};
</script>

<style lang="stylus" scoped>
  @import "~@/assets/style/variables.styl"

  .alpha-container
    position absolute
    top $headerHeight * 2
    right 0
    bottom 0
    width .60rem
    text-align center
    display flex
    flex-direction column
    justify-content center
</style>
