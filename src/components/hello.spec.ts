import { mount, mountConfig } from '../../test/helper';

// Need to import with require because there is no typings
// available via *.vue files
// const Hello = require('./Hello.vue');
//
// by using hello.vue.d.ts we can import vue files
//
// but....
// TypeScript support is unreliable
// https://github.com/vire/jest-vue-preprocessor/issues/17
// import Hello from './hello.vue';

import Hello from './hello';

describe('Hello Component', () => {
  it('should have a default "msg" set to "Welcome"', () => {
    const component = new Hello();
    expect(component.msg).toMatch('Welcome');
  });

  // it('should renders correctly', () => {
  //   // render component as a single unit
  //   const fixture = mount(Hello);
  //   fixture.setData({ msg: 'Hello World' });
  //   expect(fixture).toMatchSnapshot();
  // });

  // it('should renders correctly with childs', () => {
  //   // render component with children
  //   const fixture = mount(Hello);
  //   expect(fixture).toMatchSnapshot();
  // });

  // it('should renders config', () => {
  //   const componentConfig = {
  //     template: `
  //       <div>
  //         <hello ref="component"></hello>
  //       </div>
  //     `,
  //     components: {
  //       hello: Hello,
  //     },
  //   };
  //   const fixture = mountConfig(componentConfig);
  //   expect(fixture).toMatchSnapshot();
  //   expect(fixture.vm.$refs.component).toBeTruthy();
  //   expect(fixture.vm.$refs.component.msg).toMatch('Welcome');
  // });
});
