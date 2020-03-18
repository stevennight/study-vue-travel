<template>
  <div id="app">
      <transition-component>
        <keep-alive>
          <router-view class="child-view"/>
        </keep-alive>
      </transition-component>
  </div>
</template>

<script>
import TransitionComponent from '@/components/Transition.vue';

export default {
  name: 'App',
  components: {
    TransitionComponent,
  },
};
</script>

<style lang="stylus">
</style>
