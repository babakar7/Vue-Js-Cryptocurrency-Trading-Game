<template>

<div class="container stocks">

<Stock v-for="(stock,index) in $store.state.stocks" v-bind:key="index" v-bind:stock="stock"/>

</div>

</template>

<script>
import Stock from '@/components/stocks/Stock'

export default {
  name: 'Stocks',
  components: {
    Stock:Stock
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.stocks{

  margin-top:50px;
  display:flex;
  justify-content:flex-start;
  flex-wrap: wrap;
}

</style>
