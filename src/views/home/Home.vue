<template>
    <div class="home-container">
      <header-component></header-component>
      <swiper-component :list="swiperList"></swiper-component>
      <icon-component :list="iconList"></icon-component>
      <recommand-component :list="recommendList"></recommand-component>
      <near-travel-component :list="weekendList"></near-travel-component>
    </div>
</template>

<script>
import axios from 'axios';

import HeaderComponent from './components/Header.vue';
import SwiperComponent from './components/Swiper.vue';
import IconComponent from './components/Icon.vue';
import RecommandComponent from './components/Recommand.vue';
import NearTravelComponent from './components/NearTravel.vue';

export default {
  name: 'Home',
  data() {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
    };
  },
  components: {
    HeaderComponent,
    SwiperComponent,
    IconComponent,
    RecommandComponent,
    NearTravelComponent,
  },
  mounted() {
    axios.get('/api/index', {
      params: {
        id: this.$store.state.currentCity.id,
      },
    })
      .then((res) => {
        if (res.status === 200 && res.data && res.data.ret) {
          const { data } = res.data;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.swiperList = data.swiperList;
          this.weekendList = data.weekendList;
        }
      })
      .catch(() => {
        console.log('网络似乎无法连接，请稍后再试。');
      });
  },
};
</script>

<style scoped>

</style>
