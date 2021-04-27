<template>
  <div class="col mb-5">
    <div class="card shadow">
    <img class="bd-placeholder-img card-img-top" :src="product.image_url" alt="ZigiZaga.product.store"  width="200" height="200"  focusable="false">

    <div class="card-body">
        <h6 class="card-text">{{ product.name }}</h6>
        <p>Rp.{{ product.price.toLocaleString('id') }}</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click.prevent="goToDetail(product.id)">Buy</button>
        </div>
        <!-- <small class="text-muted">9 mins</small> -->
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: ['product'],
  methods: {
    goToDetail (id) {
      if (localStorage.access_token) {
        localStorage.setItem('ProductId', id)
        this.$router.push(`/detail/${id}`)
      } else {
        Swal.fire({
          title: 'New Customer?',
          text: 'Sign in or create an account for free',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sign In',
          cancelButtonText: 'Sign Up'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/login')
          } else if (result.dismiss === 'cancel') {
            this.$router.push('/register')
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
