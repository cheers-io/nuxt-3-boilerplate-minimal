import en from './locales/en.json';
import de from './locales/de.json';

const fallbackLocale = 'de';
export default {
  defaultLocale: fallbackLocale,
  detectBrowserLanguage: {
    useCookie: true,
    alwaysRedirect: true,
    onlyOnRoot: true
  },
  locales: ['de', 'en'],
  vueI18n: {
    fallbackLocale,
    messages: { en, de },
    silentTranslationWarn: true
  }
};
