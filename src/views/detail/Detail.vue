<template>
  <div class="detail-container" ref="detail-container">
    <header-image-component
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></header-image-component>
    <head-component :sightName="sightName"></head-component>
    <div style="height: 20rem;">
      <list-component :categoryList="categoryList"></list-component>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
    };
  },
  methods: {
    handleApi(res) {
      if (res.status === 200 && res.data && res.data.ret) {
        const { data } = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    },
  },
  mounted() {
    axios.get('/api/detail', {
      params: {
        id: this.$route.params.id,
      },
    })
      .then(this.handleApi)
      .catch();
  },
};
</script>

<style scoped>

</style>
