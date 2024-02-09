'use client';

import { EScreenType, useDeviceType } from '@/shared/hooks/useDeviceType';

import SearchMobile from './components/SearchMobile';
import Desktop from './devices/Desktop';
import Mobile from './devices/Mobile';
import { IHeaderProps } from './types';

export default function Header({ value }: IHeaderProps) {
  const device = useDeviceType();
  return (
    <header aria-label="Header">
      {device === EScreenType?.DESKTOP ? (
        <Desktop attributes={value?.data?.attributes} />
      ) : (
        <Mobile attributes={value?.data?.attributes} />
      )}
      {device === EScreenType?.MOBILE && <SearchMobile />}
    </header>
  );
}
