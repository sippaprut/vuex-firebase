<template>
    <div class="col-md-7">
        {{ product.name }}
    </div>
</template>

<script>
    import * as names from '../../stores/names.js';
    import { mapGetters } from 'vuex';
    export default {
        props : ['id' , 'name'] ,
        computed : {
            ...mapGetters({
                product : names.GET_PRODUCTS
            })
        } ,
        created(){
            console.log(names.LOAD_PRODUCT);
            this.$store.dispatch(names.LOAD_PRODUCT , this.id);
        }
    }
</script>