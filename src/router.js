import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/map',
      component: () => import('@/views/Map.vue'),
    },
    {
      path: '/tribes',
      component: () => import('@/views/Tribes.vue'),
    },
    {
      path: '/jobs',
      component: () => import('@/views/Jobs.vue'),
    },
    {
      path: '/factions',
      component: () => import('@/views/Factions.vue'),
    },
    {
      path: '/creatures',
      component: () => import('@/views/Creatures.vue'),
    },
  ],
})
