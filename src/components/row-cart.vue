<template>
  <tr>
    <td><img class="bd-placeholder-img" :src="cart.Product.image_url" alt="PaperTiles.co"  width="200" height="200" focusable="false"></td>
    <td><h5>{{cart.Product.name}}</h5></td>
    <td><h5>Rp.{{cart.Product.price.toLocaleString('id')}},00</h5></td>
    <td>
      <div class="input-group px-1" v-if="isId == cart.id && isEdit === true">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">{{cart.Product.stock}}</span>
        </div>
        <input type="number" class="form-control text-center" min= "1" name = "stock"  :max= "cart.Product.stock" onKeyDown="return false" aria-describedby="basic-addon2" v-model="inputQuantity">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"><img src="../assets/check2.svg" alt="" @click.prevent="updateCart(cart.id)"></button>
        </div>
      </div>
      <button type="button" class="btn btn-secondary btn-lg px-4" v-if="isEdit === false || isId != cart.id" @click.prevent="goToEdit(cart.id)">{{cart.quantity}}</button>
    </td>
    <td><button type="button" class="btn btn-danger" @click.prevent="deleteCart(cart.id)">Delete</button></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      inputQuantity: this.cart.quantity
    }
  },
  props: ['cart'],
  methods: {
    deleteCart (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteCart', id)
              .then(() => {
                this.$emit('deleted')
              })
              .catch(err => {
                const { errors } = err.response.data
                console.log(errors)
              })
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Cart has been deleted.',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your Cart is safe :)',
              'error'
            )
          }
        })
    },
    goToEdit (id) {
      this.$store.commit('changeIsId', id)
      this.$store.commit('changeIsEdit', true)
    },
    updateCart (id) {
      const data = {
        id,
        quantity: this.inputQuantity
      }
      this.$store.dispatch('updateCart', data)
        .then(() => {
          this.$emit('updated')
        })
        .catch(err => {
          const { errors } = err.response.data
          console.log(errors)
        })
    }
  },
  computed: {
    isId () {
      return this.$store.state.isId
    },
    isEdit () {
      return this.$store.state.isEdit
    }
  }
}
</script>

<style scoped>
td {
  text-align: center;
  vertical-align: middle;
}
img {
max-width: 100%;
height: auto;
}
</style>
