// router/index.js

import { createRouter, createWebHistory } from "vue-router";
import IndexDarkView from "../views/IndexDarkView.vue";
import IndexView from "../views/IndexView.vue";
import IntroView from "../views/IntroView.vue";
import BlogPageMockupShape from "../views/ProjectBlogs/BlogPageMockupShape.vue";
import BlogPageAveBottle from "../views/ProjectBlogs/BlogPageAveBottle.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: IndexDarkView,
  },
  {
    path: "/dark",
    name: "IndexDarkView",
    component: IndexView,
  },
  {
    path: "/intro",
    name: "IntroView",
    component: IntroView,
  },
  {
    path: "/projects/mockup-shape",
    name: "BlogPageMockupShape",
    component: BlogPageMockupShape,
  },
  {
    path: "/projects/ave-bottle",
    name: "BlogPageAveBottle",
    component: BlogPageAveBottle,
  },
  // Add routes for other projects' BlogPage components
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
