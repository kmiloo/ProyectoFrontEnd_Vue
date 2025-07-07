// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';

const routes = [
  { path: '/inicio', component: HomeView },
  { path: '/detalle/:id', component: DetailView, props: true },
  { path: '/', redirect: '/inicio' }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
