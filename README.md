# Shopping Cart Vuex + firebase

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


2. vue init webpack-simple [Foloder name]

### install vuex ##
npm install --save vuex

### install support es6 ###
npm install --save-dev babel-preset-stage-2
Go to File .babelrc and add new object ["stage-2"]

### Install Router ####
npm install vue-router

### Install Vue Firebase ###
npm install vue firebase vuefire --save
https://github.com/vuejs/vuefire

npm install vue firebase vuexfire --save
https://github.com/posva/vuexfire

### How To Import CSS into js files ###
npm install css-loader style-loader --save-dev

Then in webpack.base.conf.js
 {
   test: /\.css$/,
   use: [ 'style-loader', 'css-loader' ]
 },

 ### Install VueLocalStorage ###
 npm install vue-localstorage --save
 https://github.com/pinguinjkeke/vue-local-storage








