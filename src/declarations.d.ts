// declare module '*.vue' {
//   import Vue = require('vue')
//   const value: Vue.ComponentOptions<Vue>
//   export default value as Vue.ComponentOptions<Vue>
// }

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
declare var process: {
  env: {
    NODE_ENV: string;
    LOG_LEVEL: any;
  };
};

/*
 * To use require
 */
declare var require: {
  (path: string): any;
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void,
  ) => void;
};
