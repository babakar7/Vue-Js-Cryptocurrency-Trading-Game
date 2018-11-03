<template>


<div class="container pl-5 pr-5">
  <div class="card bg-light home"">
    <div class="card-body text-center">

      <h5 class="card-title display-4 text-center"> Ready to FOMO? </h5>


      <p> You must save & load your data </p>

      <p> Click End Day to start a new Day</p>


      <p class="funds"> Funds: {{$store.state.funds | currency}}</p>


    </div>

  </div>

</div>


</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  margin-top:60px;
}

.funds{

  font-size:20px;
}
</style>
