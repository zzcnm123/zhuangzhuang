import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'


Vue.use(VueRouter)

const routes = [
  movieRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
