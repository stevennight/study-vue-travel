import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '@/views/home/Home.vue';
import NotFoundComponent from '@/common/view/error/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '*',
    name: '404',
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
