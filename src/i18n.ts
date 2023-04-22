import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';

i18next.use(initReactI18next).init({
	debug: true,
	resources: {
		en: {
			translation: en,
		},
	},
	lng: 'en',
	returnNull: false,
	interpolation: {
		escapeValue: false
	}
});

export default i18next;

