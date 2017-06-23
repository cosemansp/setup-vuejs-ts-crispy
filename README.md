# Setup VueJS

> A Vue.js project in Typescript

# Disclaimer
> THIS IS WORK IN PROGRESS

## Dependecies

- All dependecies of vuejs/webpack except babel* & eslint
- ```yarn add tslint```
- ```yarn add vue-class-component html-loader```
- ```yarn add bootstrap-sass sass-loader sass-node```
- ```yarn add font-awesome```

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```
## ToDo

- [x] Refactor vue/cli-webpack to TS
- [x] Add vue-class-component
- [x] Add tslint (split *.vue into ts & html file)
- [x] Add global sass file
- [x] Add bootstrap
- [x] Add font-awesome
- [x] Add polyfills (copy from angular)
- [ ] Add logger
- [ ] Add config
- [ ] Add localstorage
- [ ] Add Jest unit testing
- [ ] Add Vuex
- [ ] Add pretify

## Issues

- TSLint (and Vetur) has no support for *.vue files. Fallback to ts & html files.

## Resoources

Typescript in VueJS
https://github.com/ulaval/modul-typescript-template
https://github.com/locoslab/vue-typescript-component-example
https://github.com/Toilal/vue-webpack-template





