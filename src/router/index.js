import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/top10',
    name: 'Top 10',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopTenView.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriesView.vue')
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import(/* webpackChunkName: "about" */ '../views/TagsView.vue')
  },
  {
    path: '/single-article',
    name: 'Single Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleArticleView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
