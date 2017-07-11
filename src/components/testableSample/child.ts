import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <div>{{msg}}</div>
  `,
})
export default class Child extends Vue {
  msg = 'I am a child';
}
