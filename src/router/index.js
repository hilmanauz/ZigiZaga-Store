import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/register.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/detail/:id',
    name: 'detail product',
    component: () => import(/* webpackChunkName: "login" */ '../views/detail-product.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/carts',
    name: 'cart',
    component: () => import(/* webpackChunkName: "login" */ '../views/cart.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/transactions',
    name: 'transaction',
    component: () => import(/* webpackChunkName: "login" */ '../views/transaction.vue'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.access_token
  if (isLogged) {
    if (!to.meta.auth) next('/')
    else next()
  } else {
    if (!to.meta.auth || to.name === 'Home') next()
    else {
      next('/')
    }
  }
})

export default router
