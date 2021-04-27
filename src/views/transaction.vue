<template>
<div class="height:100vh; display: flex; flex-direction: column;">
  <navbar/>
    <h1 class="text-center" style="margin-top:50px" v-if="transactions.length != 0"> {{user.toUpperCase()}} Transaction</h1>
    <br>
    <div class="container">
      <div v-if="transactions.length != 0">
        <transactionCard v-for="transaction in transactions" :key="transaction.id" :transaction="transaction"/>
      </div>
      <div class="text-center" v-else>
        <h1 style="margin-top:30px; margin-bottom:30px"> Transaction Not Found </h1>
        <img src="https://media2.giphy.com/media/f70drlKvnFw9a/giphy.gif?cid=ecf05e4720j59tu898nh330nxaclbul2nr1k9nb5eicfxvoa&rid=giphy.gif" alt="">
        <h2 style="margin-top:30px"> Check Our New Product &amp; Checkout Your Cart </h2>
      </div>
    </div>
  <foot/>
</div>
</template>

<script>
import transactionCard from '../components/transaction-card'
import navbar from '../components/navbar'
import foot from '../components/footer'
export default {
  data () {
    return {
      user: localStorage.email.split('@')[0]
    }
  },
  components: {
    navbar,
    foot,
    transactionCard
  },
  methods: {
    fetchTransaction () {
      this.$store.dispatch('fetchTransaction')
    }
  },
  computed: {
    transactions () {
      return this.$store.state.transactions
    }
  },
  created () {
    this.fetchTransaction()
  }
}
</script>

<style scoped>
.container {
  width: 700px;
}
</style>
