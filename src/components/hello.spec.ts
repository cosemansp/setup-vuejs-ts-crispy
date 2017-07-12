import Vue from 'vue';
import { mount } from 'avoriaz';
import Hello from './hello';

describe('Hello Component', () => {
  it('should have a default "msg" set to "Welcome"', () => {
    const component = new Hello();
    expect(component.msg).toMatch('Welcome');
  });
});

// This doesn't work for typescript in jest
// Issue: TypeScript support is unreliable
// https://github.com/vire/jest-vue-preprocessor/issues/17

// hello.vue.d.ts is required to import typed vue files
// import HelloComp from './hello.vue';

// // Alternative to avoriaz mount function
// const VueWrapper = require('avoriaz/dist/VueWrapper').default;
// export const mountConfig = (config: any) => {
//   const vm = new Vue(config);
//   vm.$mount();
//   return new VueWrapper(vm);
// };

// describe('Hello Vue Component', () => {
//   it('should renders correctly', () => {
//     // render component as a single unit
//     const fixture = mount(HelloComp);
//     fixture.setData({ msg: 'Hello World' });
//     expect(fixture).toMatchSnapshot();
//   });

//   it('should renders correctly with childs', () => {
//     // render component with children
//     const fixture = mount(HelloComp);
//     expect(fixture).toMatchSnapshot();
//   });

//   it('should renders config', () => {
//     const componentConfig = {
//       template: `
//         <div>
//           <hello ref="component"></hello>
//         </div>
//       `,
//       components: {
//         hello: HelloComp,
//       },
//     };
//     const fixture = mountConfig(componentConfig);
//     expect(fixture).toMatchSnapshot();
//     expect(fixture.vm.$refs.component).toBeTruthy();
//     expect(fixture.vm.$refs.component.msg).toMatch('Welcome');
//   });
// });
