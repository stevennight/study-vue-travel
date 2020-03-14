<template>
    <div class="alpha-container">
      <div class="alpha" v-for="(item, key) of cities" :key="key">{{key}}</div>
    </div>
</template>

<script>
export default {
  name: 'Alpha',
  props: {
    cities: Object,
  },
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
    color: $mainColor
</style>
