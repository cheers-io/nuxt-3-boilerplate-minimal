import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  scan: {
    dirs: ['./'],
    exclude: [
      'node_modules',
      'dist',
      '.git',
      '.github',
      '.nuxt',
      // testing files & folders
      'coverage',
      '**/__snapshots__',
      '*.test.js'
    ]
  },

  preflight: {
    alias: {
      // add nuxt aliases
      'nuxt-link': 'a',
      // @nuxt/image module
      'nuxt-img': 'img'
    }
  }
});
