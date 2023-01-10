import i18n from './config/i18n';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', ['@nuxtjs/i18n', i18n]]
});
