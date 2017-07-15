import Vue from 'vue';
import Vuex from 'vuex';

import Product from './modules/product/index.js'
import Cart from './modules/cart/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules : {
        Product ,
        Cart
    }
})