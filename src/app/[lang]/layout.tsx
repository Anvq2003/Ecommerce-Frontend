import '@/shared/styles/globals.scss';

import clsx from 'clsx';
import { Metadata } from 'next';

import { gordita } from '@/assets/fonts';
import { i18n, Locale } from '@/config/i18n';
import { siteConfig } from '@/config/site';
import { getLanguage } from '@/shared/helpers/getDictionary';

import { Providers } from './providers';
import StoreProvider from './storeProvider';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen overflow-x-hidden antialiased', gordita.className)}>
        <StoreProvider>
          <Providers lang={params.lang} themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
            {children}
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
