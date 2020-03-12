<template>
    <div class="home-container">
      <header-component></header-component>
      <swiper-component></swiper-component>
      <icon-component></icon-component>
      <recommand-component></recommand-component>
      <near-travel-component></near-travel-component>
    </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import SwiperComponent from './components/Swiper.vue';
import IconComponent from './components/Icon.vue';
import RecommandComponent from './components/Recommand.vue';
import NearTravelComponent from './components/NearTravel.vue';

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    SwiperComponent,
    IconComponent,
    RecommandComponent,
    NearTravelComponent,
  },
};
</script>

<style scoped>

</style>
