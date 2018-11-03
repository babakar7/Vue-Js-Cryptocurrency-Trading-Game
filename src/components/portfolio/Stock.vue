<template>





        <div class="card bg-light stock" style="width: 19rem;">
          <div class="card-body">
            <h5 class="card-title"> {{stock.name}}  <span class="value ml-2"> Price: $ {{stock.price}}

             (Qty: {{stock.qty}})</span></h5>




            <form class=card-text v-on:submit.prevent="sell">

              <input type="text" placeholder="Quantity" v-model="qty">

              <p>  <span style="color:red"  v-show="feedback">{{feedback}} </span></p>


            <button class="card-link btn btn-danger " v-model.number="qty"> Dump</button>

          </form>


          </div>
        </div>






</template>


<script>
export default {
  name: 'Stock',
  props: {
    stock:Object
  },
  data () {
    return {

      qty:null,
      feedback:null

    }
  },

  methods:{

    sell(){

      if(!isNaN(this.qty) && this.qty>0 && this.qty <= this.stock.qty ){

        let order = this.stock


        this.$store.commit('dumpStock', {order:order,qty:this.qty})

        this.feedback = null
        this.qty= null

      }else{

        if(this.qty > this.stock.qty ){

          this.feedback = "Sorry, you don't have this amount"

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

.value{

  font-size:15px;
}

.stock{

  margin-left:10px;
}


</style>
