import 'server-only'
import type { Locale } from '@/config/i18n'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const languages = {
  vi: () => import('@/translations/viVN/index.json').then((module) => module.default),
  en: () => import('@/translations/enUS/index.json').then((module) => module.default),
}

export const getLanguage = async (locale: Locale) => languages[locale]?.() ?? languages.en()
