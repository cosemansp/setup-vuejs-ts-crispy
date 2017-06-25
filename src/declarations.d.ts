declare module "*.vue" {
  import Vue from 'vue'
  export default typeof Vue
}

/*
 * to allow import precompile vue templates
 * https://github.com/ktsn/vue-template-loader#typescript
 *
 * import WithRender from './hello.html';
 * @WithRender
 * @Component
 * export default class Hello extends Vue {
 *   ...
 * }
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

/*
 * To allow import html files as string
 */
// declare module "*.html" {
//     const content: string;
//     export default content;
// }

/*
 * Config type as injected by webpack
 */
declare var process : {
  env: {
    NODE_ENV: string
    LOG_LEVEL: any
  }
}

/*
 * To use require
 */
declare var require: {
    (path: string): any;
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};


