
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// add polyfills
import './polyfills';

// Load global styles
import './styles.scss';

Vue.config.productionTip = true;

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
