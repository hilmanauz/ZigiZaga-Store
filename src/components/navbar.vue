<template>
<div class="flex-grow: 1">
  <header class="site-header navbar navbar-expand-lg sticky-top py-1">
  <nav class="container d-flex flex-column flex-md-row bd-highlight">
    <a class="py-2 mr-auto bd-highlight" href="" aria-label="Product" @click.prevent="goToHome">
      <img src="../assets/ZIGIZAGA-white.png" alt="" style="width:125px; height:30px">
    </a>
    <div class="form-inline no-p navbar-right" v-if="isLogin === true">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown" :class="{'show': dropdown === true}">
          <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown"  :aria-expanded="active ? 'true' : 'false'" v-on:click.prevent="changeDropdown" >{{email.split('@')[0]}} </a>
          <ul class="dropdown-menu" :class="{'show': dropdown === true}">
            <li><a class="dropdown-item" href="" @click.prevent="goToCart">Cart</a></li>
            <li><a class="dropdown-item" href="" @click.prevent="goToTransaction">Transaction</a></li>
            <li><a class="dropdown-item" href="" @click.prevent="logout">Logout</a></li>
          </ul>
          </li>
      </ul>
    </div>
    <a class="py-2 bd-highlight" href="" v-if="isLogin === false" @click.prevent="goToLogin">Sign In</a>
  </nav>
  </header>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'navbar',
  data () {
    return {
      dropdown: false,
      active: false,
      email: localStorage.email || ''
    }
  },
  methods: {
    changeDropdown () {
      if (this.dropdown) {
        this.dropdown = false
        this.active = false
      } else {
        this.dropdown = true
        this.active = true
      }
    },
    goToHome () {
      this.$router.push('/')
    },
    goToCart () {
      this.$router.push('/carts')
    },
    goToLogin () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('changeIsLogin', false)
      this.$router.push('/')
      Swal.fire('Success', 'Logout Successfull', 'success')
    },
    goToTransaction () {
      this.$router.push('/transactions')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('changeIsLogin', true)
    } else {
      this.$store.commit('changeIsLogin', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #8e8e8e;
  transition: color .15s ease-in-out;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}
a {
  font-size: 17px;
}
.dropdown-menu {
min-width: 135px !important;
}
.dropdown-menu{
position: absolute;
right:0px;
}
</style>
