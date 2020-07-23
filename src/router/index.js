import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

import Juventus from '../views/juventus.vue'
import NewJuventusPlayer from '../views/newJuventusPlayer.vue'
import ViewJuventusPlayer from '../views/viewJuventusPlayer.vue'
import EditJuventusPlayer from '../views/editJuventusPlayer.vue'

import Barcelona from '../views/barcelona.vue'
import NewBarcelonaPlayer from '../views/newBarcelonaPlayer.vue'
import ViewBarcelonaPlayer from '../views/viewBarcelonaPlayer.vue'
import EditBarcelonaPlayer from '../views/editBracelonaPlayer.vue'

import Liverpool from '../views/liverpool.vue'
import NewLiverpoolPlayer from '../views/newLiverpoolPlayer.vue'
import ViewLiverpoolPlayer from '../views/viewLiverpoolPlayer.vue'
import EditLiverpoolPlayer from '../views/editLiverpoolPlayer.vue'

import NovaRuta from '../views/novaruta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/juventus',
    name: 'juventus',
    component: Juventus
  },
  {
    path: '/barcelona',
    name: 'barcelona',
    component: Barcelona
  },
  {
    path: '/liverpool',
    name: 'liverpool',
    component: Liverpool
  },
  {
    path: '/newBarcelonaPlayer',
    name: 'newBarcelonaPlayer',
    component: NewBarcelonaPlayer
  },
  {
    path: '/newJuventusPlayer',
    name: 'newJuventusPlayer',
    component: NewJuventusPlayer
  },
  {
    path: '/newLiverpoolPlayer',
    name: 'newLiverpoolPlayer',
    component: NewLiverpoolPlayer
  },
  {
    path: '/edit/:footballer_id',
    name: 'editJuventusPlayer',
    component: EditJuventusPlayer
  },
  {
    path: '/edit/:footballer_id',
    name: 'editBarcelonaPlayer',
    component: EditBarcelonaPlayer
  },
  {
    path: '/edit/:footballer_id',
    name: 'editLiverpoolPlayer',
    component: EditLiverpoolPlayer
  },
  {
    path: '/:footballer_id',
    name: 'viewBarcelonaPlayer',
    component: ViewBarcelonaPlayer
  },
  {
    path: '/:footballer_id',
    name: 'viewJuventusPlayer',
    component: ViewJuventusPlayer
  },
  {
    path: '/:footballer_id',
    name: 'viewLiverpoolPlayer',
    component: ViewLiverpoolPlayer
  },
  {
    path: '/novaruta',
    name: 'novaruta',
    component: NovaRuta
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
