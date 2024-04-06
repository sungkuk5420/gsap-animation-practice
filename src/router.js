import { createRouter, createWebHistory } from 'vue-router'

const routes = []

routes.push(
  {
    path: '/',
    name: 'index',
    component: () => import('./components/Index.vue'),
  },
  {
    path: '/toniguy',
    name: 'toniguy',
    component: () => import('./components/ToniGuy.vue'),
  }
)

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router