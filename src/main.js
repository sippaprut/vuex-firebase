import Vue from 'vue'
import App from './App.vue'
import { _ } from 'lodash'

// import Buefy from 'buefy';
// import 'buefy/lib/buefy.css'
// Vue.use(Buefy);
import VueBootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueBootstrap);

import VueLocalStorage  from 'vue-localstorage'
Vue.use(VueLocalStorage);

import VueFirebase from 'vuefire'
Vue.use(VueFirebase);


import VueRouter from 'vue-router'
import { routes } from './routers'
Vue.use(VueRouter);

import { store } from './stores/index'

const router = new VueRouter({
  routes ,
  mode : 'history'
});

Vue.filter('currencyDisplay', (value) => {
    let number = parseFloat(value);
    return ( isNaN(number) === false ) ? "$" + number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : value;
})

new Vue({
  el: '#app',
  render: h => h(App) ,
  router ,
  store
})
