declare module "*.vue" {
  import Vue from 'vue'
  export default typeof Vue
}

/* to allow importing html files
   https://github.com/ktsn/vue-template-loader#typescript
*/
declare module '*.html' {
  import Vue = require('vue')
  interface WithRender {
    <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const withRender: WithRender
  export = withRender
}

// declare var require: {
//     (path: string): any;
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };


