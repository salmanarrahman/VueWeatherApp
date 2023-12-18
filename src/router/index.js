import { createRouter, createWebHistory } from 'vue-router'
import MiazakiView from '../views/MiazakiView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'miazaki',
      component: MiazakiView
    },
    {
      path: '/city/:name',
      name: 'city',
      component: CityView
    },
    {
      path: '/dhaka',
      name: 'dhaka',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DhakaView.vue')
    }
  ]
})

export default router
