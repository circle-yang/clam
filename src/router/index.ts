/*
 * @Description:
 * @Author: yanghuan
 * @Date: 2022-09-23 18:42:14
 * @LastEditTime: 2022-09-27 19:32:50
 * @Last Modified by: yanghuan
 * @packageDocumentation:
 * @module:
 * @category:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/auth',
    //   name: 'home',
    //   component: Auth
    // },
    // {
    //   path: "/",
    //   name: "home",
    //   component: () => import("@/views/HomeView.vue"),
    // },
    // {
    //   path: "/",
    //   name: "auth",
    //   component: () => import("@/views/Auth/Register.vue"),
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: "/:errorPage(.*)",
      name: "404",
      component: () => import("@/views/Auth/Register.vue"),
    },
  ],
});

export default router;
