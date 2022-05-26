import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/dashboard/DashboardView.vue"

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/products/ProductsView.vue"
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
