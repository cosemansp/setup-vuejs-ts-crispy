import Vue from 'vue';
import * as Logger from 'js-logger';
import { local } from './core/storage';

import App from './App.vue';
import router from './router';

// add polyfills
import './polyfills';

// Load global styles
import './styles.scss';

Vue.config.productionTip = true;

// setup logger
Logger.useDefaults();
Logger.setLevel(process.env.LOG_LEVEL);
const log = Logger.get('app');

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
    log.info('Started');
    log.info('Config', JSON.stringify(process.env, null, '\t'));

    // setup localStorage prefix
    local.prefix = 'myApp';
  },
});
