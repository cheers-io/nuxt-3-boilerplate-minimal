// @vitest-environment happy-dom
import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VueComponent from '~/components/VueComponent.vue';

describe('Component tests', () => {
  test('@vue/test-utils approach', () => {
    const component = mount(VueComponent);

    expect(component.text()).toContain('Hello World');
  });
});
