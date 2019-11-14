import Vue from 'vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
import movieRouter from './movie'

=======
import Router from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'
>>>>>>> 6bbd04e6f55dab79d0f7b5b7a5127cd5b6ac6296

Vue.use(Router)

<<<<<<< HEAD
const routes = [
  movieRouter
]

const router = new VueRouter({
=======
const router = new Router({
>>>>>>> 6bbd04e6f55dab79d0f7b5b7a5127cd5b6ac6296
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  movieRouter,
  mineRouter,
  cinemaRouter
  ]
})

export default router
