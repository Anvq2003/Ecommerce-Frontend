import { create } from 'zustand';
import { Locale, i18n } from '@/config/i18n';

const useLanguageContext = create((set) => ({
  locale: i18n.defaultLocale,
  setLocale: (locale: Locale) => set({ locale }),
}));

export const languageSelector = (state: any) => state.locale;
export const setLanguageSelector = (state: any) => state.setLocale;
export default useLanguageContext;
