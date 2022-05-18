import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    }
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    beforeEnter: (to, from, next) => {
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: () => import(/* webpackChunkName: "Pokedex" */ '../views/PokedexView.vue')
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon',
    beforeEnter: (to, from, next) => {
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: () => import(/* webpackChunkName: "Pokemon" */ '../views/PokemonView.vue')
  },
  {
    path: '/habitats',
    name: 'habitats',
    beforeEnter: (to, from, next) => {
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: () => import(/* webpackChunkName: "Pokedex" */ '../views/HabitatsView.vue')
  },
  {
    path: '/habitat/:name',
    name: 'habitat',
    beforeEnter: (to, from, next) => {
      if (store.getters.getLoggedin){
        next();
      } 
      else next({ name: 'login' });
    },
    component: () => import(/* webpackChunkName: "Pokedex" */ '../views/HabitatView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
