module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vitest'],
  rules: {
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    'max-len': ['warn', { code: 120 }],
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
};
