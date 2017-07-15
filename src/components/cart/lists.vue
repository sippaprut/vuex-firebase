<template>
    <div>
        <div class="clearfix"></div>
        <table class="table  table-responsive table-bordered">
            <thead class="table-success">
                <th>#</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="cart in carts">
                    <td>
                        <img :src="cart.photo" :alt="cart.name" class="cart-photo" width="80">
                    </td>
                    <td>
                        <span class="cart-detail cart-name">{{ cart.name }}</span>
                    </td>
                    <td>
                        <span class="cart-detail cart-name">{{ cart.price |  currencyDisplay }}</span>
                    </td>
                    <td  >
                        <div class="col-10">
                            <input type="text"
                            @blur="update_quan( { quan: $event.target.value , id : cart.id})"
                             class="form-control" :value="cart.quan">
                        </div>
                    </td>
                    <td>
                        <button  @click="removeItem(cart.id)" class="btn btn-danger remove-item">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import * as names from '../../stores/names.js'

    export default {
        props : {
            carts : {
                type : Array ,
                required : true
            }
        } ,

        methods : {
            ...mapActions({
                'removeItem' : names.REMOVE_CART ,
                'update_quan' : names.UPDATE_QUAN
            })
        }
    }
</script>

<style scoped>

    .list-group-item.active {
        background-color: #5cb85c !important;
        border-color : #5cb85c !important;
    }
    .cart-photo {
        width: 50px;
        height: 50px;
        text-align: center;
        margin-right: 5px;
    }
    .cart-detail {
        margin-right: 5px;
    }

    .remove-item {
        cursor: pointer;
    }

</style>