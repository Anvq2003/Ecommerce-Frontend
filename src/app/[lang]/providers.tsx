'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { useRouter } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';
import * as React from 'react';

import { i18n, Locale } from '@/config/i18n';
import useLanguageContext, { languageSelector, setLanguageSelector } from '@/contexts/language';
import { NextUIProvider } from '@nextui-org/system';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  lang?: Locale;
}

export function Providers({ children, themeProps, lang }: ProvidersProps) {
  const router = useRouter();
  const setLanguage = useLanguageContext(setLanguageSelector);

  React.useEffect(() => {
    setLanguage(lang || i18n.defaultLocale);
  }, [lang, setLanguage]);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
