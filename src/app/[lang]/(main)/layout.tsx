'use client';
import React, { useEffect } from 'react';

import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { useDisclosure } from '@nextui-org/react';

import AuthModal from './auth';

export default function DefaultLayout({ children }: any) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);
  
  return (
    <div className="bg-bgSecondary">
      <Header />
      <main>{children}</main>
      <Footer />
      <AuthModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
