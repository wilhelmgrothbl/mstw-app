import { createRouter, createWebHistory } from 'vue-router';
import SheetData from './components/SheetData.vue';
import StartPage from './components/StartPage.vue';
import StryktipsetPage from './components/StryktipsetPage.vue';
import V75Page from './components/V75Page.vue';

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
  },
  {
    path: '/stryktipset',
    name: 'Stryktipset',
    component: StryktipsetPage
  },
  {
    path: '/v75',
    name: 'V75',
    component: V75Page
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
