import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    partialBundledLanguages: true,
    backend: {
      loadPath: '/translations/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'date') {
          return new Intl.DateTimeFormat(lng, { dateStyle: 'short' }).format(value);
        }
        return value;
      },
    },
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    debug: false,
    returnObjects: true,
  });

export default i18n;