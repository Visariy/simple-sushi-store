import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CatalogPage from '@/views/CatalogPage.vue';

const routes : any = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage,
  },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
