<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  watch: {
    $route(to, from) {
      const toArray = to.fullPath.split('/').filter((val) => val);
      const fromArray = from.fullPath.split('/').filter((val) => val);

      if (toArray.length < fromArray.length) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
      this.$router.isBack = false;
    },
  },
};
</script>

<style lang="stylus">
  .child-view
    // 一定要如下定位，否则组件内的内容位置会发生错乱。
    position absolute
    left 0
    top 0
    width 100%
    height 100%
  .slide-right-enter
    opacity .2
    transform translate(-100%, 0)
  .slide-right-leave-to
    opacity .2
    transform translate(100%, 0)
  .slide-left-enter
    opacity .2
    transform translate(100%, 0)
  .slide-left-leave-to
    opacity .2
    transform translate(-100%, 0);
  .slide-right-enter-active, .slide-right-leave-active,
  .slide-left-enter-active, .slide-left-leave-active
    transition all 1s cubic-bezier(.55,0,.1,1)
</style>
