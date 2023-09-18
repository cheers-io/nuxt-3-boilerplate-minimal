module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vitest/recommended'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    'max-len': ['warn', { code: 120 }],
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': ['error', {
      order: ['script:not([setup])', 'script[setup]', 'template', 'style']
    }]
  }
};
