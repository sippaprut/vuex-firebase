<template>
    <div>
       <div class="cartLists" v-if="handleCart()">

            <cart-list :carts="carts"></cart-list>
            <div>
                <h5>Summary: {{ summary |  currencyDisplay }}</h5>
            </div>
            <div class="clearfix"></div>

            <router-link :to="submitLink" class="btn btn-outline-success btn-lg">Submit</router-link>


       </div>


    </div>
</template>

<script>
    import * as names from '../../stores/names.js'
    import Lists from './lists.vue';
    import { mapGetters } from 'vuex'

    export default {
        components : {
            'cart-list' : Lists
        } ,

        data(){
            return {
                submitLink : {
                    name : 'OrdersDetail'
                }
            }
        } ,

        computed : {
            ...mapGetters({
                'carts' : names.GET_CART ,
                'summary' : names.GET_CART_SUMMARY
            })
        } ,

        methods : {
            handleCart() {
                return _.size(this.carts) > 0 ? true : false;
            }
        }
    }
</script>

<style>
    .cartLists {
        margin-top: 20px;
    }
</style>

