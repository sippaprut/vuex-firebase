<template>
    <div class="col-md-12">
        <br/>
        <h2>Order Detail</h2>
        <cart-list :carts="carts"></cart-list>
        <div>
            <h5>Summary: {{ summary |  currencyDisplay }}</h5>
        </div>

        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-6">
                <contact-form></contact-form>
            </div>
        </div>



    </div>
</template>

<script>
    import { mapGetters , mapActions } from 'vuex'
    import * as names from '../../stores/names.js'
    import cartList from '../cart/lists.vue';
    import contactForm from './contact_form.vue';

    export default {
        components : {
            'cart-list' : cartList ,
            'contact-form' : contactForm
        } ,
        computed : {
            ...mapGetters({
                carts : names.GET_CART ,
                summary : names.GET_CART_SUMMARY
            })
        } ,
        methods : {
        }
    }
</script>