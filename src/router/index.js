import index from "../pages/index.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "main", component: index },
  { path: "/:key?", name: "mainGuest", component: index },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
