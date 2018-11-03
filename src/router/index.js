import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header'
import Stocks from '@/components/stocks/Stocks'
import Portfolio from '@/components/portfolio/Portfolio'


Vue.use(Router)

export default new Router({


  mode: 'history',

  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {

      path:'/stocks',
      name:'Stocks',
      component:Stocks
    },

    {

      path:'/portfolio',
      name:'Portfolio',
      component:Portfolio
    }
  ]
})
