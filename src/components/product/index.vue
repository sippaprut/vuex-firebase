<template>
    <div class="row">
        <div class="col-md-7">
            <h1>Products List</h1>
            <div class="row">
                <product-item :id="id" :item="product" v-for="(product , id) in products"></product-item>
            </div>
        </div>
        <div class="col-md-5">
            <cart-list></cart-list>
        </div>
    </div>
</template>

<script>

    import * as names from '../../stores/names.js';
    import { mapGetters } from 'vuex';

    import ProductItem from './item.vue';
    import Cart from '../cart/index.vue';


    export default {
        components : {
            'productItem' : ProductItem ,
            'cartList' : Cart
        } ,
        computed : {
            ...mapGetters({
                products : names.GET_PRODUCTS
            })
        } ,

        created(){
            this.$store.dispatch(names.LOAD_PRODUCT);
            console.log(this.products)
        }
    }

</script>