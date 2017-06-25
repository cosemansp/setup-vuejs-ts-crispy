/* tslint:disable:no-require-imports no-var-requires */

import Vue from 'vue';
const { mount } = require('avoriaz');
const VueWrapper = require('avoriaz/dist/VueWrapper').default;

// // simplified mount function
// // export const mount = (Component, propsData = {}) => {
// //   const Ctor = Vue.extend(Component);
// //   const vm = new Ctor({ propsData });
// //   vm.$mount();
// //   return vm;
// // };

export const mountConfig = (config: any) => {
  const vm = new Vue(config);
  vm.$mount();
  return new VueWrapper(vm);
};

// /*
//  * Original code
//  * https://gist.github.com/chartinger/ca67dc17a5657334adb35357f40ad2b9
//  *
//  * Extra unit test info
//  * https://gist.github.com/roberthamel/670640351ccac7a63630ec8b68537455
//  * https://www.drydenwilliams.co.uk/code/2017/06/03/unit-testing-in-vuejs/
//  * https://www.gitbook.com/book/eddyerburgh/avoriaz/details
//  *
//  */

export { mount };

export const output = {
  of(component: any) {
    return component.$el.outerHTML;
  },
};

