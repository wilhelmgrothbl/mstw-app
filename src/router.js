import { createRouter, createWebHistory } from 'vue-router';
import SheetData from './components/SheetData.vue';
import StartPage from './components/StartPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: StartPage
  },
  {
    path: '/sheet-data',
    name: 'SheetData',
    component: SheetData
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
