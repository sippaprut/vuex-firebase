import Firebase from 'firebase'

const fireBaseConfig = {
    apiKey: "AIzaSyCy-mVTLg_O47u9hYnyU_8I3O2cw4zmgUk",
    authDomain: "vue-shopping-cart-fc9fe.firebaseapp.com",
    databaseURL: "https://vue-shopping-cart-fc9fe.firebaseio.com",
    projectId: "vue-shopping-cart-fc9fe",
    storageBucket: "vue-shopping-cart-fc9fe.appspot.com",
    messagingSenderId: "226475800047"
};

const fireBaseApp = Firebase.initializeApp(fireBaseConfig);
const fireBaseDB = fireBaseApp.database();


export default{
    fireBaseConfig,
    fireBaseApp ,
    fireBaseDB
}