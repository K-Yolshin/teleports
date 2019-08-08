import i18n from 'i18next';
import { reactI18nextModule as plugin } from 'react-i18next';

/**
 * Initializes the localization module.
 */
function initLocales() {
  const defLanguage = 'en';

  const query = location.search.match(/\blanguage=([^&]+)/);
  const queryLanguage = query && query[1];

  const envLanguage = process.env.LANGUAGE;

  const language = queryLanguage || envLanguage || defLanguage;

  const locales = {};

  return i18n
    .use(plugin)
    .init({
      resources: locales,
      defaultNS: 'translations',
      lng: language,
      fallbackLng: defLanguage,
      keySeparator: false,
      interpolation: { escapeValue: false },
    });
}

export default initLocales;
