<template>
  <div class="d-flex bd-highlight mb-3">
    <div class="mr-auto bd-highlight">
      <h5 class="card-title">{{cart.Product.name}}</h5>
      <p class="card-text">Quantity: {{cart.quantity}}</p>
      <p class="card-text">Price: Rp.{{cart.Product.price.toLocaleString('id')}}</p>
    </div>
    <div class="bd-highlight">
      <img :src="cart.Product.image_url" alt="" style="height: 150px; width: 150px">
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart']
}
</script>

<style>

</style>
