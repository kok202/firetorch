import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ko from './ko.json';

const language = sessionStorage.getItem('language') ?? 'en';
i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		ko: {
			translation: ko,
		},
	},
	lng: language,
	fallbackLng: ['en', 'ko'],
	debug: true,
	keySeparator: '.',
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;

export const changeLanguage = (lang: 'en' | 'ko') => {
	sessionStorage.setItem('language', lang);
};
