import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './lang/en.json';
import ar from './lang/ar.json';
import fr from './lang/fr.json';


i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ar: ar,
    fr: fr,
  },
  interpolation: {
    escapeValue: false // react already safe from xss
  }
});
  
export default i18n;