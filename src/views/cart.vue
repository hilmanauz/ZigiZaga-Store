<template>
  <div style="height:100vh; display: flex; flex-direction: column;">
      <navbar/>
      <h1 class="text-center" style="margin-top:50px; margin-bottom: 30px"> {{user.toUpperCase()}} Cart</h1>
      <br>
      <div class="container">
        <div class="tableFixHead">
        <table class="table table-hover text-center">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
            <tbody>
              <rowCart v-for="cart in carts" :key="cart.id" :cart="cart" @updated="updated" @deleted="deleted"/>
            </tbody>
        </table>
      </div>
          <button class="w-100 btn btn-primary btn-lg" type="submit" @click.prevent="addTransaction">Total Checkout: Rp.{{totalPrice.toLocaleString('id')}},00</button>
      </div>
    <foot/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import foot from '../components/footer'
import rowCart from '../components/row-cart'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      user: localStorage.email.split('@')[0]
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    updated () {
      this.$store.commit('changeIsId', '')
      this.$store.commit('changeIsEdit', false)
      this.fetchCart()
    },
    deleted () {
      this.fetchCart()
    },
    addTransaction () {
      (async () => {
        const { value: input } = await Swal.fire({
          title: 'Checkout',
          input: 'text',
          inputLabel: `Your bill: ${this.totalPrice}`,
          inputPlaceholder: 'Type: BAYAR',
          inputAttributes: {
            maxlength: 50,
            required: true
          }
        })
        if (input === 'BAYAR') {
          const data = {
            totalPrice: this.totalPrice,
            carts: this.carts
          }
          this.$store.dispatch('addTransaction', data)
        } else {
          Swal.fire('Error', 'Transaction failed', 'error')
        }
      })()
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  components: {
    rowCart,
    navbar,
    foot
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style scoped>
.container {
  max-width: 1250px;
  flex-grow: 1;
}
/* table {
    display: block;
    overflow: auto;
}
tbody {
    display: block;
    max-height: 100vh;
    overflow: auto;
}
thead, tbody tr {
    display: table;
    width: 100%;
} */
.tableFixHead          { overflow-y: auto;}
.tableFixHead thead th { position: sticky; top: 0; }

/* Just common table stuff. Really. */
table  { border-collapse: collapse; width: 100%; }
th, td { padding: 8px 16px; }
th     { background:#eee; }
</style>
