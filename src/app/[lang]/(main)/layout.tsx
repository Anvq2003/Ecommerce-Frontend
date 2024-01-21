import React from 'react';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default function DefaultLayout({ children }: any) {
  return (
    <div className="bg-bgSecondary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
