import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/Product.vue"),
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/act",
    name: "Act",
    component: () => import("../views/Act.vue"),
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/member",
    name: "/member",
    component: () => import("../views/Member.vue"),
  },
  {
    path: "/qa",
    name: "/qa",
    component: () => import("../views/Qa.vue"),
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/prize",
    name: "/prize",
    component: () => import("../views/Prize.vue"),
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("../views/Notice.vue"),
    meta: {
      layout: "Layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
