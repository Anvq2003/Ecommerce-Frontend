'use client';

import { EScreenType, useDeviceType } from '@/shared/hooks/useDeviceType';
import Desktop from './devices/Desktop';
import Mobile from './devices/Mobile';
import SearchMobile from './components/SearchMobile';

export default function Header() {
  const device = useDeviceType();

  return (
    <>
      {device === EScreenType?.DESKTOP ? <Desktop /> : <Mobile />}
      {device === 'mobile' && <SearchMobile />}
    </>
  );
}
