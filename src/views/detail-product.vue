<template>
<div>
  <navbar />
  <div class="container" style="margin-top: 30px">
      <!-- Portfolio Item Heading -->
      <h2 class="my-4"> {{productDetail.name}} </h2>
      <!-- Portfolio Item Row -->
      <div class="row">
        <div class="col-md-6">
          <img class="img-fluid" :src="productDetail.image_url" alt="">
        </div>
        <div class="col-md-6">
          <h3 class="my-3">Description:</h3>
          <p>{{productDetail.description}}</p>
          <h3 class="my-3">Price</h3>
              <h2 class="product-price my-3">Rp.{{productDetail.price.toLocaleString('id')}},00</h2>
            <form>
              <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Stock: {{productDetail.stock}}</span>
                  </div>
                  <input type="number" min= "1" name = "stock"  :max= "productDetail.stock" onKeyDown="return false" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="inputQuantity">
                </div>
                <button type="submit" class="btn btn-secondary btn-lg text-white" @click.prevent="addToCart(productDetail.id)">Add To Cart</button>
            </form>
        </div>
      </div>
      <!-- /.row -->
      <!-- Related Projects Row -->
      <h3 class="my-5">Guess you like our other products</h3>

      <div class="row">
        <div class="col-md-3 col-sm-6 mb-4" v-for="randomProduct in randomProducts" :key="randomProduct.id">
          <div class="col">
            <a href="" @click.prevent="goToAnotherProduct(randomProduct.id)" style="text-decoration: none; color: black;">
              <div class="card shadow">
                <img class="bd-placeholder-img card-img-top" :src="randomProduct.image_url" alt="PaperTiles.co"  width="100%" height="200"  focusable="false">
                <div class="card-body">
                    <p class="card-text">{{randomProduct.name}}</p>
                    <p class="card-text">Rp.{{randomProduct.price.toLocaleString('id')}},00</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  </div>
  <foot />
</div>
</template>

<script>
import navbar from '../components/navbar'
import foot from '../components/footer'
export default {
  data () {
    return {
      inputQuantity: ''
    }
  },
  computed: {
    productDetail () {
      return this.$store.state.productDetail
    },
    randomProducts () {
      return this.$store.getters.randomProduct
    }
  },
  components: {
    navbar,
    foot
  },
  methods: {
    goToAnotherProduct (id) {
      localStorage.setItem('ProductId', id)
      this.$router.push(`/detail/${id}`)
      this.$store.dispatch('fetchOneProduct', id)
      this.toTop()
    },
    fetchOneProduct () {
      const id = localStorage.ProductId
      this.$store.dispatch('fetchOneProduct', id)
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    toTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    addToCart (id) {
      const data = {
        ProductId: id,
        quantity: this.inputQuantity
      }
      this.$store.dispatch('addToCart', data)
      this.inputQuantity = ''
    }
  },
  mounted () {
    this.toTop()
    this.fetchOneProduct()
    this.fetchProduct()
  }
}
</script>

<style scoped>
p {
  font-size: 15px;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}
/*
 * Base structure
 */
.container {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}
.cover-container {
  max-width: 42em;
}

</style>
