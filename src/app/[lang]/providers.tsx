'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { i18n, Locale } from '@/config/i18n';
import useLanguage, { languageSelector, setLanguageSelector } from '@/contexts/language';
import { NextUIProvider } from '@nextui-org/system';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  lang?: Locale;
}

export function Providers({ children, themeProps, lang }: ProvidersProps) {
  const router = useRouter();
  const setLanguage = useLanguage(setLanguageSelector);

  React.useEffect(() => {
    setLanguage(lang || i18n.defaultLocale);
  }, [lang, setLanguage]);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
