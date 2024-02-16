'use client';

import { EScreenType, useDeviceType } from '@/shared/hooks/useDeviceType';

import SearchMobile from './components/SearchMobile';
import Desktop from './devices/Desktop';
import Mobile from './devices/Mobile';

export default function Header() {
  const device = useDeviceType();
  return (
    <header aria-label="Header">
      {device === EScreenType?.DESKTOP ? <Desktop /> : <Mobile />}
      {device === EScreenType?.MOBILE && <SearchMobile />}
    </header>
  );
}
