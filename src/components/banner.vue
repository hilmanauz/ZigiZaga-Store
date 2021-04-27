<template>
  <b-carousel-slide>
    <template #img>
      <img
      class="d-block img-fluid w-100"
      style="height: 550px;"
      :src="banner.image_url"
      alt="ZigiZaga.banner.store"
      >
    </template>
  </b-carousel-slide>
</template>

<script>
export default {
  props: ['banner']
}
</script>

<style>

</style>
