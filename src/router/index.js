import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Feed from '@/views/Feed.vue';
import GlobalFeed from '@/views/GlobalFeed.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed 
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: Feed 
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: Feed 
  },
  {
    path: '/articles/new',
    name: 'tag',
    component: Feed 
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: () => import(/* webpackChunkName: "about" */ '@/views/CreateArticle.vue')
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Article.vue')
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: () => import(/* webpackChunkName: "about" */ '@/views/CreateArticle.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/profile/:slug',
    name: 'userProfile',
    component: () => import('@/views/UserProfile.vue')
  },
  {
    path: '/profile/:slug/favorites',
    name: 'userProfileFavorites',
    component: () => import('@/views/UserProfile.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
