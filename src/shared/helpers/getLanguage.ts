import 'server-only'
import type { Locale } from '@/config/i18n'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const languages = {
  vi: () => import('@/translations/vi.json').then((module) => module.default),
  en: () => import('@/translations/en.json').then((module) => module.default),
}

export const getLanguage = async (locale: Locale) => languages[locale]?.() ?? languages.en() 
