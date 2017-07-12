import Vue from 'vue';
import { mount } from 'avoriaz';
import VueWrapper from 'avoriaz/dist/VueWrapper';

import TestableSample from './testableSample';

describe('Hello Component', () => {
  it('should have a default "title"', () => {
    const component = new TestableSample();
    expect(component.title).toMatch('I am testable');
  });

  it('should renders correctly', () => {
    // render component with child components
    const fixture = mount(TestableSample);
    fixture.setData({ title: 'I am testable' });
    expect(fixture).toMatchSnapshot();
  });

  const mountConfig = (config: any) => {
    const vm = new Vue(config);
    vm.$mount();
    return new VueWrapper(vm);
  };

  it('should renders config', () => {
    const componentConfig = {
      template: `
        <div>
          <testableSample ref="component"></testableSample>
        </div>
      `,
      components: {
        testableSample: TestableSample,
      },
    };
    const fixture = mountConfig(componentConfig);
    expect(fixture).toMatchSnapshot();
    expect(fixture.vm.$refs.component).toBeTruthy();
    expect(fixture.vm.$refs.component.title).toMatch('I am testable');
  });
});
