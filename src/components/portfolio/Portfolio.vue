<template>

<div class="container portfolio">


<Stock v-for="(stock,index) in stocksBought"
v-bind:key="index"v-bind:stock="stock" v-show="stock.price*stock.qty > 0" />

<h1 class="display-4 ml-auto mr-auto" v-show="$store.state.funds == 10000">Your Porfolio is empty</h1>


</div>


</template>





<script>
import Stock from '@/components/portfolio/Stock'
export default {
  name: 'Portfolio',
  components:{
    Stock:Stock
  },
  data () {
    return {

      stocksBought:this.$store.state.stocksBought
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.portfolio{

  margin-top:50px;
  display:flex;
  justify-content:flex-start;
  flex-wrap: wrap;

}

</style>
