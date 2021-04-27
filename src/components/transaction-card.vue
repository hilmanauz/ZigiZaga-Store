<template>
  <div class="card mt-5">
    <div class="d-flex bd-highlight card-header">
      <h5 class="mr-auto bd-highlight"> Id: {{transaction.id}}</h5>
      <h5 class="bd-highlight">Total: Rp.{{transaction.totalPrice.toLocaleString('id')}}</h5>
    </div>
    <div class="card-body">
      <rowTransaction v-for="(cart, idx) in transaction.carts" :key="idx" :cart="cart"/>
       <h7 class="mr-auto bd-highlight"> Checkout History: {{new Date(transaction.createdAt).toString().split('GMT')[0]}}</h7>
    </div>
  </div>
</template>

<script>
import rowTransaction from '../components/row-transaction'
export default {
  props: ['transaction'],
  components: {
    rowTransaction
  }
}
</script>

<style>

</style>
