import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Produtos from '../views/Produtos.vue'
import Encomenda from '../views/Encomenda.vue'
import Carrinho from '../views/Carrinho.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Admin from '../views/Admin.vue'
import Selectcar from '../views/Selectcar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Produtos',
    component: Produtos
  },
  {
    path: '/Encomenda',
    component: Encomenda
  },
  {
    path: '/Carrinho',
    component: Carrinho,
    beforeEnter: (to, from, next) => {
      if(!store.state.user){
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/Produtos/:id',
    component: Selectcar,
    beforeEnter: (to, from, next) => {
      if(!store.state.user){
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if(!store.state.user){
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router