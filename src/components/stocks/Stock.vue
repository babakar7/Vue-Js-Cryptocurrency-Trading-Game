<template>


  <div class="card bg-light stock">
    <div class="card-body">
      <h5 class="card-title"> {{stock.name}}  <span class="price ml-2"> Price: <span class="value">${{stock.price}}</span> </span></h5>

      <form class=card-text v-on:submit.prevent="buy">

        <input type="number" placeholder="Quantity" v-model.number="qty" v-bind:class="{red:insufficient}">

      <p>  <span style="color:red"  v-show="feedback">{{feedback}} </span></p>

      <button class="card-link btn btn-primary"> Pump</button>

    </form>

    </div>
  </div>




</template>

<script>
export default {
  name: 'Stock',
  props:{
    stock: Object
  },
  data () {
    return {

      qty:null,
      feedback:null
    }

  },

  computed:{
      insufficient(){

        return this.qty * this.stock.price  > this.$store.state.funds
      }
  },

    methods:{

        buy(){

          if(!isNaN(this.qty) && this.qty>0 && !this.insufficient){

            let order = {id:this.stock.id , qty:this.qty}

            this.$store.commit('buyStock', order)

            this.feedback = null
            this.qty= null

            this.$router.push('/Portfolio')

          }else{

               if(this.insufficient){

                 this.feedback = "Sorry, too broke"

               }else{
                 this.feedback = "You must enter a valid number"
          }
          }
        }

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stock{

  margin-left:10px;
}
.price{

font-size:13px;

}

.red{

  border: 1px solid red;
}

.value{

  font-size:22px;
  color:grey;
}

</style>
