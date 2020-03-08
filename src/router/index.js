import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/minePage'),
    children: [
      {
        path: '/homePage',
        component: () => import('@/views/minePage/homePage')
      },
      {
        path: '/classify',
        component: () => import('@/views/minePage/classify')
      },
      {
        path: '/shoppingCar',
        component: () => import('@/views/minePage/shoppingCar')
      },
      {
        path: '/mine',
        component: () => import('@/views/minePage/mine')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
