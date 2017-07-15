# example-vuex-stock

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

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Install Vue ###
1. #install vue cli https://github.com/vuejs/vue-cli
npm install -g vue-cli

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








