<template>
  <div class="detail-container" ref="detail-container">
    <header-image-component></header-image-component>
    <head-component></head-component>
    <list-component></list-component>
  </div>
</template>

<script>
import HeaderImageComponent from './components/HeaderImage.vue';
import HeadComponent from './components/Head.vue';
import ListComponent from './components/List.vue';

export default {
  name: 'Detail',
  components: {
    HeaderImageComponent,
    HeadComponent,
    ListComponent,
  },
};
</script>

<style scoped>

</style>
