import Vue from 'vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(VueRouter)

const router = new VueRouter({
=======
<<<<<<< HEAD
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
=======
import Router from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(Router)

const router = new Router({
>>>>>>> 6bbd04e6f55dab79d0f7b5b7a5127cd5b6ac6296
>>>>>>> 65bf9e61397c7fe6be945d032d95955dc3a9d6bd
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  movieRouter,
  mineRouter,
  cinemaRouter
  ]
})

export default router
