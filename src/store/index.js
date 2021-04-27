import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'
import _ from 'lodash'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photo: {},
    banners: [],
    products: [],
    productDetail: {},
    carts: [],
    transactions: [],
    isId: '',
    isEdit: false,
    isLogin: false
  },
  mutations: {
    insertPhotos (state, payload) {
      state.photo = payload
    },
    insertBanner (state, payload) {
      state.banners = payload
    },
    insertProduct (state, payload) {
      state.products = payload
    },
    insertOneProduct (state, payload) {
      state.productDetail = payload
    },
    insertCart (state, payload) {
      state.carts = payload
    },
    changeIsId (state, payload) {
      state.isId = payload
    },
    changeIsEdit (state, payload) {
      state.isEdit = payload
    },
    changeIsLogin (state, payload) {
      state.isLogin = payload
    },
    insertTransaction (state, payload) {
      state.transactions = payload
    }
  },
  actions: {
    fetchPhotos (context, payload) {
      axios({
        url: '/photos',
        method: 'GET'
      })
        .then(({ data }) => {
          const idx = Math.floor(Math.random() * 25)
          data = data.photos[idx].src.large2x
          context.commit('insertPhotos', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('email', data.email)
          context.commit('changeIsLogin', true)
          router.push('/')
          Swal.fire('Success', 'Login Successfull', 'success')
        })
        .catch(err => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    register (context, payload) {
      const { email, password } = payload
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email,
          password
        }
      })
        .then(() => {
          router.push('/login')
          Swal.fire('Success', 'Register Successfull', 'success')
        })
        .catch(err => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    fetchBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'GET'
      })
        .then(({ data }) => {
          const banner = data.filter(el => el.status === 'Active')
          context.commit('insertBanner', banner)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context, payload) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchOneProduct (context, payload) {
      axios({
        url: `/products/${payload}`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertOneProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      axios({
        url: `/carts/${payload.ProductId}`,
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Product has been added to Cart',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    fetchCart (context, payload) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      return axios({
        url: `/carts/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
    },
    deleteCart (context, payload) {
      return axios({
        url: `/carts/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addTransaction (context, payload) {
      axios({
        url: '/transactions',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(() => {
          router.push('/')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Transaction has paid successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchTransaction (context, payload) {
      axios({
        url: '/transactions',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertTransaction', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    randomProduct: state => {
      return _.sampleSize(state.products, 3)
    },
    totalPrice: state => {
      let total = 0
      for (let i = 0; i < state.carts.length; i++) {
        total += (state.carts[i].Product.price * state.carts[i].quantity)
      }
      return total
    }
  }
})
