'use client';

import { EScreenType, useDeviceType } from '@/shared/hooks/useDeviceType';
import Desktop from './devices/Desktop';
import Mobile from './devices/Mobile';
import SearchMobile from './components/SearchMobile';
import { IBaseData, IImage } from '@/shared/types';

export interface IHeader {
  search: boolean;
  account: boolean;
  actions: boolean;
  nav: any;
  logo: IBaseData<IImage>;
  logoDark: IBaseData<IImage>;
}

export interface IHeaderProps {
  value: IBaseData<IHeader>;
}

export default function Header({ value }: IHeaderProps) {
  const device = useDeviceType();

  return (
    <header aria-label="Header">
      {device === EScreenType?.DESKTOP ? <Desktop value={value} /> : <Mobile value={value} />}
      {device === EScreenType?.MOBILE && <SearchMobile />}
    </header>
  );
}
