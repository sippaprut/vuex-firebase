const Products = resolve => {
    require.ensure( ['./components/product/index.vue'] , () => {
        resolve( require('./components/product/index.vue') );
    } , 'products') //create a 'user' group file
}

const ProductsDetail = resolve => {
    require.ensure( ['./components/product/detail.vue'] , () => {
        resolve( require('./components/product/detail.vue') );
    } , 'products') //create a 'user' group file
}

const OrdersDetail = resolve => {
    require.ensure( ['./components/order/index.vue'] , () => {
        resolve( require('./components/order/index.vue') )
    })
}

export const routes = [
    {
        path : '' ,
        name : 'Products' ,
        component :  Products ,
    } ,
    {
        path : '/product/:id/:name' ,
        name : 'ProductDetail' ,
        component : ProductsDetail ,
        props: true
    } ,

    {
        path : '/orders/detail' ,
        name : 'OrdersDetail' ,
        component : OrdersDetail
    }

];