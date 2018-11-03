import Vue from 'vue'
import Vuex from 'vuex'
import extStocks from '../data/stocks'

Vue.use(Vuex)

export const store = new Vuex.Store({

state:{

  stocks:[],

  funds:10000,

  stocksBought:[]
},

mutations: {

    setStocks(state, stocks){

      //console.log(extStocks)

      state.stocks = extStocks

    },

    RandomStocks(state){
        state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.4))
        })

        var i
        let found = []
        for(i=0;i<state.stocksBought.length;i++){

            found[i] = state.stocks.find(el =>  el.id == state.stocksBought[i].id)

           if (found){
             console.log(found)
             state.stocksBought[i].price = found[0].price
           }
        }



    },

    buyStock (state, {id,qty}) {


      let found =  state.stocksBought.find(function(el){

            return el.id == id
          })

          if (!found){


              let findStock = state.stocks.find(function(el){
                return el.id == id
              })


            let addedStock = {id:id, name:findStock.name, qty:qty, price:findStock.price}


              state.stocksBought.push(addedStock)

            state.funds -= qty *  findStock.price


          }else{

              found.qty += qty

              state.funds -= qty *  found.price

          }

          //update funds

   },

   dumpStock(state, order){


     let stockToSell =  state.stocksBought.find(function(el){

           return el.id == order.order.id
         })


         stockToSell.qty -= order.qty


         state.funds += order.qty * order.order.price

   },


   load(state){


     Vue.http.get('data.json').then(response => response.json()
         .then(data=>{

           if(data){
             const stocks = data.stocks
             const funds = data.funds
             const stockPortfolio =  data.stockPortfolio

             console.log(stockPortfolio)
              state.funds = funds

              state.stocksBought.push(stockPortfolio[0])

           }
         }))

    }
 },

 actions:{

   load(context){
     context.commit('load')
   }
 }


})
