/*
 * @Description: 
 * @Author: yanghuan
 * @Date: 2022-09-23 18:42:14
 * @LastEditTime: 2022-09-26 23:26:38
 * @Last Modified by: yanghuan
 * @packageDocumentation: 
 * @module: 
 * @category: 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'home',
      component: Auth
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
