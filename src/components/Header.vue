<template>




  <div class="container">

    <h1 v-color="['orange', 'pink', 'blue']" > MY TIME IS NOW </h1>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">


  <router-link to="/"><a class="navbar-brand" href="#">Stock Trader</a></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

          <li class="nav-item ">
            <router-link to="/Portfolio"><a class="nav-link" href="#">Portfolio</a></router-link>
          </li>


      <li class="nav-item">
      <router-link to="/Stocks">  <a class="nav-link" href="#">Stocks</a></router-link>
      </li>

    </ul>

    <ul class="navbar-nav navbar-right">


            <li class="nav-item ">
            <router-link to="/Stocks">  <span class="nav-link end" v-on:click="endDay" >End day</span></router-link>
            </li>


      <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown"
        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" v-on:click="save">Save</a>
          <a class="dropdown-item" href="#" @click="load">Load</a>
        </div>
      </li>



</ul>

<span class="navbar-text"> Funds:  {{ $store.state.funds | currency}}</span>

  </div>
</nav>



  </div>



</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

      isDropdownOpen: false
    }
  },

  methods:{

    endDay(){

      this.$store.commit('RandomStocks')
    },

    save(){
      const data = {
        funds:this.$store.state.funds,
        stockPortfolio:this.$store.state.stocksBought,
        stocks:this.$store.state.stocks
      }
      console.log(data)
      this.$http.put('data.json', data)
    },

    load(){

        this.$store.dispatch('load')
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.end{
  cursor:pointer;
}
</style>
