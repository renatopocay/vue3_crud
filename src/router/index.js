import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/dashboard/DashboardView.vue"
import ProductList from "../views/products/ProductListView.vue"
import Product from "../views/products/ProductView.vue"

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/products",
    name: "products",
    component: ProductList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
