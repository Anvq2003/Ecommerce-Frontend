'use client';

import { EScreenType, useDeviceType } from '@/shared/hooks/useDeviceType';
import Desktop from './devices/Desktop';
import Mobile from './devices/Mobile';
import SearchMobile from './components/SearchMobile';

export default function Header() {
  const device = useDeviceType();

  return (
    <header aria-label="Header">
      {device === EScreenType?.DESKTOP ? <Desktop /> : <Mobile />}
      {device === 'mobile' && <SearchMobile />}
    </header>
  );
}
