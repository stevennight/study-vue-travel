import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
import store from './store';

// style
import '@/assets/style/global.styl';
import '@/assets/style/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
