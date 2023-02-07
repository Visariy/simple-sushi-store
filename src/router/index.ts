import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import MenuPage from '../pages/MenuPage.vue';

const routes : any = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
