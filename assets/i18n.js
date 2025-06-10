import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as Localization from 'expo-localization'; // or use other RN localization
import en from '../locales/en/translation.json';
import it from '../locales/it/translation.json';

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3', // for RN compatibility
        resources: {
            en: {translation: en},
            fr: {translation: it},
        },
        lng: i18n.language || 'it',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes
        },
    });

export default i18n;
