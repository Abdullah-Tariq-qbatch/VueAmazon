import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListingView from '../views/ProductListingView.vue'
import LoginView from '../views/LoginView.vue'
import ProductDetailView from '../views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'dashboard',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductListingView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products/:id',
      props: true,
      component: ProductDetailView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
