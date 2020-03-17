import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '@/views/home/Home.vue';
import CityComponent from '@/views/city/City.vue';
import DetailComponent from '@/views/detail/Detail.vue';
import NotFoundComponent from '@/common/view/error/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/cities',
    name: 'cities',
    component: CityComponent,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailComponent,
  },
  {
    path: '*',
    name: '404',
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
