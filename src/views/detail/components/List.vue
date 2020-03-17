<template>
    <div class="list-container">
      <div class="title">123</div>
      <div class="children">
        <div class="title">123</div>
        <div class="children">
          <div class="title">123</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'List',
};
</script>

<style lang="stylus" scoped>
  .list-container
    line-height .48rem
    height 20rem
    .title
      padding-left .24rem
      border-bottom .01rem solid #ccc
    .children
      margin-left .24rem
</style>
