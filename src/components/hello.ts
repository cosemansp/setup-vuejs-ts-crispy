import Vue from 'vue';

// more info: https://github.com/vuejs/vue-class-component
import Component from 'vue-class-component';

import template from './hello.html';

/**
 * Alternative precompile the template
 * See vue-template-loader
 * import WithRender from './hello.html';
 *
 * @WithRender
 * @Component
 * export default class Hello extends Vue {
 *   ...
 * }
 */

/**
 * Import template as string and attach to
 * component. Need
 */
@Component({
  template,
})
export default class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App';

  constructor() {
    super();
    // tslint:disable-next-line
    console.log('');
  }
}
