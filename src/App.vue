<template>
  <div id="app">

    <Header/>

    <transition name="slide" mode="out-in">

    <router-view></router-view>

  </transition>


  </div>
</template>

<script>
import Home from '@/components/Home'
import Header from '@/components/Header'
import Stocks from '@/components/stocks/Stocks'
import Portfolio from '@/components/portfolio/Portfolio'
export default {
  name: 'App',
  components:{

    Home,
    Header,
    Stocks,
    Portfolio
  },

  created(){

    this.$store.commit('setStocks')

  }
}
</script>

<style>
#app {

}


.slide-enter-active{
animation: slide-in 200ms ease-out ;

}


.slide-leave-active{
  animation: slide-out 200ms ease-out ;


}


@keyframes slide-in{

  from{

    transform: translateY(-30px);
    opacity:0;

  }


  to{
    transform: translateY(0);
    opacity:1;

  }
}




@keyframes slide-out{

  from{

    transform: translateY(0);
    opacity:1;

  }


  to{
    transform: translateY(-30px);
    opacity:0;

  }
}

</style>
