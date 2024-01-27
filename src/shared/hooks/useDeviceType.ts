'use client';

import { useState, useEffect } from 'react';

const MOBILE_WIDTH = 768;

const TABLET_WIDTH = 1024;

export enum EScreenType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

export const useDeviceType = () => {
  const [device, setDevice] = useState<EScreenType>(EScreenType.DESKTOP);

  const handleResize = () => {
    const { innerWidth } = window;

    if (innerWidth < MOBILE_WIDTH) {
      setDevice(EScreenType?.MOBILE);
    } else if (innerWidth < TABLET_WIDTH) {
      setDevice(EScreenType.TABLET);
    } else {
      setDevice(EScreenType.DESKTOP);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return device;
};
