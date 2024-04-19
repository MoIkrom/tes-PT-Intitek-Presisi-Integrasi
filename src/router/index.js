import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CreateProductView from '../views/CreateProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: UserDetailView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailView
    },
    {
      path: '/product/create',
      name: 'createProduct',
      component: CreateProductView
    }
  ]
})

export default router
