'use client';

import { useState, useEffect } from 'react';

const MOBILE_WIDTH = 768;

export type TScreenType = 'mobile' | 'tablet' | 'desktop';

export const useDeviceType = () => {
  const [device, setDevice] = useState<TScreenType>();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_WIDTH) {
        setDevice('mobile');
      } else if (window.innerWidth >= MOBILE_WIDTH) {
        setDevice('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return device;
};
