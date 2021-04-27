<template>
  <main>
    <navbar />
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="300"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <bannerCarousel v-for="banner in banners" :key="banner.id" :banner="banner"/>
      </b-carousel>
    </div>

    <div class="album py-5 bg-light">
      <h1 class="text-center mb-5">Our Products</h1>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <productCard v-for="product in products" :key="product.id" :product="product"/>
        </div>
      </div>
    </div>

    <foot />
  </main>
</template>

<script>
import foot from '../components/footer'
import productCard from '../components/product-card'
import bannerCarousel from '../components/banner'
import navbar from '../components/navbar'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    toTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    ...mapState(['products', 'banners'])
  },
  components: {
    navbar,
    productCard,
    bannerCarousel,
    foot
  },
  created () {
    this.toTop()
    this.fetchProduct()
    this.fetchBanner()
  }
}
</script>

<style scoped>
main {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}
.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
}
.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}
.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}
.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}
a {
  text-decoration: none;
}

</style>
