'use client';

import { useDeviceType } from '@/shared/hooks/useDeviceType';
import Desktop from './devices/Desktop';
import Mobile from './devices/Mobile';
import SearchMobile from './components/SearchMobile';

export default function Header() {
  const device = useDeviceType();
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 bg-bgSecondary dark:shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)]">
        {device === 'desktop' ? <Desktop /> : <Mobile />}
      </header>
      <div className={device === 'desktop' ? 'h-[110px]' : ''} />
      {device === 'mobile' && <SearchMobile />}
    </>
  );
}
