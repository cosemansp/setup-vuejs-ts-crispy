
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as Logger from 'js-logger';

import App from './App.vue';
import router from './router';

// add polyfills
import './polyfills';

// Load global styles
import './styles.scss';

Vue.config.productionTip = true;

// setup logger
Logger.useDefaults();
Logger.setLevel(Logger.DEBUG);
const log = Logger.get('app');
log.info('Started');
// log.info('Config', JSON.stringify(environment, null, '\t'))

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
