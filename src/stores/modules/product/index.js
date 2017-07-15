import VueFirebase from 'vuefire'
import firebaseCfg from '../../../firebaseCfg.js'
import * as names from '../../names.js';

var productRef = firebaseCfg.fireBaseDB.ref('products');

export default {
    state : {
        items : []
    } ,
    getters : {
        [names.GET_PRODUCTS] : states => {
            return states.items;
        } ,
    } ,
    mutations : {
        [names.CHAGE_PRODUCT] : (states , products) => {
            states.items = products;
        }
    } ,
    actions : {
        // [names.LOAD_PRODUCTS] : ( {commit} ) => {
        //      productRef.on('value', (snap) => {
        //         commit(names.CHAGE_PRODUCT , snap.val());
        //     });
        // } ,

        [names.LOAD_PRODUCT] : ( {commit} , id ) => {
            let productTable = productRef;
            if ( typeof id !== "undefined" )
            {
                productTable = productRef.child(id);
            }

            productTable.on('value', (snap) => {

                if ( typeof id !== "undefined" )
                {
                    commit(names.CHAGE_PRODUCT , snap.val() );
                }
                else
                {
                    let products = [];
                    _.forEach(snap.val() , function(item , key ){
                        products.push({
                            ...item ,
                            id : key
                        });
                    });
                    commit(names.CHAGE_PRODUCT , products );
                }


            });
        }
    } ,

}

