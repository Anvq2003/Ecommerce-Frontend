'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { useRouter } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';

import { i18n, Locale } from '@/config/i18n';
import useLanguageContext, { setLanguageSelector } from '@/contexts/language';
import { HeroUIProvider } from "@heroui/system";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  lang?: Locale;
}

export function Providers({ children, themeProps, lang }: ProvidersProps) {
  const router = useRouter();
  const setLanguage = useLanguageContext(setLanguageSelector);

  useEffect(() => {
    setLanguage(lang || i18n.defaultLocale);
  }, [lang, setLanguage]);

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
          <SessionProvider>
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={10}
              showOnShallow={true}
            />
            {children}
          </SessionProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
