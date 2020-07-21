import Vue from 'vue'
import VueRouter from 'vue-router'
import Barcelona from '../views/barcelona.vue'
import NewFootballer from '../views/NewFootballer.vue'
import ViewFootballer from '../views/ViewFootballer.vue'
import EditFootballer from '../views/EditFootballer.vue'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/barcelona',
    name: 'barcelona',
    component: Barcelona
  },
  {
    path: '/new',
    name: 'newFootballer',
    component: NewFootballer
  },
  {
    path: '/edit/:footballer_id',
    name: 'editFootballer',
    component: EditFootballer
  },
  {
    path: '/:footballer_id',
    name: 'viewFootballer',
    component: ViewFootballer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
