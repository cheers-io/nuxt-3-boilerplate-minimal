import { defineVitestConfig } from 'nuxt-vitest/config';
import { configDefaults } from 'vitest/config';

export default defineVitestConfig({
  test: {
    exclude: [...configDefaults.exclude, 'tests/e2e/**']
  }
});
