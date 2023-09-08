/**
 * Simple test that relies on Nuxt environment
 * Notice its file name contains .nuxt. part
 */

import { describe, test, expect } from 'vitest';

describe('Unit tests', () => {
  test('runtimeConfig', () => {
    const runtimeConfig = useRuntimeConfig();

    expect(runtimeConfig).toBeDefined();
  });
});
