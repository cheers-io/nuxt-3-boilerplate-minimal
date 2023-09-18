import { describe, test, expect } from 'vitest';
import { mountSuspended } from 'nuxt-vitest/utils';
import VueNuxtComponent from '~/components/VueNuxtComponent.vue';

describe('Component tests', () => {
  test('nuxt-vitest approach', async () => {
    const component = await mountSuspended(VueNuxtComponent);

    expect(component.text()).toContain('Vue version is 3');
  });
});
