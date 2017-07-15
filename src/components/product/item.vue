<template>
    <div class="col-sm6 col-md-4 list-item">
        <div class="thumbnail">
            <img :src="item.photo" :alt="item.name" class="product-photo">
            <div class="caption">
                <router-link   tag="h3" :to="link">
                 <a>{{ item.name }}</a>
                </router-link>
                <p>{{ item.price | currencyDisplay}}</p>
            </div>
            <div class="action-btn">
                <button @click="addCart(item)"
                class="btn btn-info">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
    import * as names from '../../stores/names.js'
    import { mapActions } from 'vuex';

    export default{
        props : [ 'item' , 'id' ] ,
        data() {
            return {
                link : {
                    name : 'ProductDetail' ,
                    params : {
                        id : this.item.id ,
                        name : this.item.name.replace(' ' , '-')
                    }
                } ,

            }
        } ,
        methods : {
           ...mapActions({
              'addCart' : names.ADD_CART
           })
        }

    }
</script>

<style scoped>
    .list-item {
        margin-bottom: 10px;
    }
    .product-photo {
        width: 242px;
        height: 200px;
        text-align: center;
    }
    .caption{
        margin-top: 10px;
    }
    .caption > h3 > a {
        font-size: 0.8em;
        display: block;

    }
    .action-btn {
        margin-top: 10px;
        display: block;
    }
    .action-btn > button {
        cursor: pointer;
    }

</style>