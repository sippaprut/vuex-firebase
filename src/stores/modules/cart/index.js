import * as names from '../../names.js'
import VueFirebase from 'vuefire'
import firebaseCfg from '../../../firebaseCfg.js'

export default {
    state : {
       // items : JSON.parse(window.localStorage.getItem('vuex-shoppingcart') || [])
       items : JSON.parse(window.localStorage.getItem('vue-shoppingcart')) || [] ,
    } ,
    getters : {
        [ names.GET_CART ] : states => {
            return states.items;
        } ,

        [ names.GET_CART_SUMMARY ] : states => {
            return _.sumBy( states.items , (o) => {
                return o.quan * o.price;
            })
        }
    } ,

    mutations : {
        [names.ADD_CART] : ( states , product ) => {
            const records = _.find( states.items , (o) => { return o.id == product.id } );
            if ( typeof records === "undefined" )
            {
                states.items.push({
                    ...product ,
                    quan : 1
                });
            }
            else
            {
                records.quan++
            }
            window.localStorage.setItem('vue-shoppingcart' , JSON.stringify(states.items));
        } ,

        [names.REMOVE_CART] : ( states , id ) => {
             states.items =  _.filter(states.items , (o) => {
                return o.id != id
             });
             window.localStorage.setItem('vue-shoppingcart' , JSON.stringify(states.items));
        } ,

        [names.UPDATE_QUAN] : ( states , { quan , id } ) => {
            let records = _.find( states.items , (o) => {
                return o.id == id;
            });
            records.quan = quan;
            window.localStorage.setItem('vue-shoppingcart' , JSON.stringify(states.items));
        } ,

        [ names.CLEAR_CART ] : ( states ) => {
            states.items = [];
            window.localStorage.removeItem('vue-shoppingcart');
        }

    } ,

    actions : {
        [names.ADD_CART] : ( states , product ) => {
            states.commit( names.ADD_CART , product )
        } ,

        [names.REMOVE_CART] : ( {commit} , id  ) => {
            if ( confirm("Do you want to remove this item?"))
            commit( names.REMOVE_CART , id );
        } ,

        [names.UPDATE_QUAN] : ( {commit} , obj ) => {
            if ( _.isNaN(parseInt(obj.quan)) === false )
            {
                commit( names.UPDATE_QUAN , obj );
            }
            else
            {
                console.log("no int")
             //   alert("Please fill quan with numberic!")
            }
        } ,

        [names.SAVE_ORDER] : ( states , forms ) => {
            firebaseCfg.fireBaseDB.ref('orders').push({
                ...states.item ,
                forms
            });
            states.commit( names.CLEAR_CART );
        }

    }

}