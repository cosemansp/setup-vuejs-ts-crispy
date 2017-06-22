import Vue from 'vue';
import Component from 'vue-class-component';
// more info: https://github.com/vuejs/vue-class-component

// See vue-template-loader
import WithRender from './hello.html';

@WithRender
@Component
// @Component({
//   template: `
//     <div class="hello">
//       <h1>{{ msg }}</h1>
//     </div>
//   `,
// })
export default class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App';

  constructor() {
    super();
    // tslint:disable-next-line
    console.log('');
  }
}
