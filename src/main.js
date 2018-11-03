// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from './store/store'
import VueResource from 'vue-resource'
Vue.use(BootstrapVue);
Vue.use(VueResource)
Vue.http.options.root ='https://stock-f5380.firebaseio.com/'
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
Vue.config.productionTip = false

Vue.directive('color', function(el, binding){

var i  =  0

  var colorChange =   setInterval(()=>{

      el.style.color = binding.value[i]

      i++

      if( i == binding.value.length ){
        i = 0
      }
    }, 1000)


    console.log('ok')

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
