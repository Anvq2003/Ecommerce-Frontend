import React from 'react';
import Header from '@/layout/Header';

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Header />
      <main className="pt-5 lg:pt-[30px] bg-bgPrimary">{children}</main>
    </>
  );
}
