import Vue from 'vue';
import Component from 'vue-class-component';
import Child from './child';

import template from './testableSample.html';

@Component({
  template,
  components: {
    Child,
  },
})
export default class TestableSample extends Vue {
  title = 'I am testable';

  constructor() {
    super();
  }
}
