import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./src/assets/locales/en/translation.json')
      },
      fa: {
        translation: require('./src/assets/locales/fa/translation.json')
      }
    },
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
//-------------------------------------------------------------------------------------------
//how to use in components
// import { useTranslation } from 'react-i18next';

// function App() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };
//   {
//     "greeting": "سلام {{name}}!"
//   }
//   const { t } = useTranslation();
// return <div>{t('greeting', { name: 'علی' })}</div>;
// خروجی: سلام علی!