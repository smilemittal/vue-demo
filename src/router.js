// router.js

import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/index';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./Pages/Auth/Login.vue'),
    meta: { requiresAuth: false }, // Add meta field for authentication
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./Pages/Dashboard/IndexPage.vue'),
    meta: { requiresAuth: true }, // This route requires authentication
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add a navigation guard to check authentication before navigating to a route
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuthStore.isAuthenticated) {
    // If the route requires authentication and the user is not authenticated, redirect to login
    next('/login');
  } else {
    next();
  }
});

export default router;
