<template>
  <div>
    <app-stocks v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stocks>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from './Stock'
export default {
  computed:{
    ...mapGetters({
      stocks:'stockPortfolio'
    })
  },
  components:{
    appStocks:Stock
  }
}
</script>

<style>

</style>
