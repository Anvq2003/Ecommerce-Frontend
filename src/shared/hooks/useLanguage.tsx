import 'server-only'
import type { Locale } from '@/config/i18n'
import React from 'react'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const languages = {
  vi: () => import('@/translations/viVN/index.json').then((module) => module.default),
  en: () => import('@/translations/enUS/index.json').then((module) => module.default),
}

export const useLanguage = (lang: Locale) => {
  const [dict, setDict] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    languages[lang]().then(setDict)
  }, [lang])

  return dict
}