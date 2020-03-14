<template>
    <div class="city-container">
      <head-component></head-component>
      <search-component :cities="cities"></search-component>
      <list-component :hotCities="hotCities" :cities="cities"></list-component>
      <alpha-component :cities="cities"></alpha-component>
    </div>
</template>

<script>
import axios from 'axios';

import HeadComponent from './components/Head.vue';
import SearchComponent from './components/Search.vue';
import ListComponent from './components/List.vue';
import AlphaComponent from './components/Alpha.vue';

export default {
  name: 'City',
  data() {
    return {
      hotCities: [],
      cities: {},
    };
  },
  components: {
    HeadComponent,
    SearchComponent,
    ListComponent,
    AlphaComponent,
  },
  mounted() {
    axios.get('/api/city')
      .then((res) => {
        if (res.status === 200 && res.data && res.data.ret) {
          const { data } = res.data;
          this.hotCities = data.hotCities;
          this.cities = data.cities;
        }
      })
      .catch();
  },
};
</script>

<style scoped>

</style>
