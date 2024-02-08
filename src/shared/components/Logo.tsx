'use client';
// import { LogoDark, LogoLight } from '@/components/Icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { IBaseData, IImage, ThemeType } from '../types';

interface ILogoProps {
  logo: IBaseData<IImage>;
  logoDark: IBaseData<IImage>;
}

export default function Logo({ logo, logoDark }: ILogoProps) {
  const { theme } = useTheme();
  
  const url = useMemo(() => logo?.data?.attributes?.url, [logo]);
  const urlDark = useMemo(() => logoDark?.data?.attributes?.url, [logoDark]);

  // return <Link href="/">{theme === 'dark' ? <LogoDark /> : <LogoLight />}</Link>;
  return (
    <Link href="/">
      {theme === ThemeType?.LIGHT ? (
        <Image src={url} alt="Logo" width={100} height={100} />
      ) : (
        <Image src={urlDark} alt="Logo" width={100} height={100} />
      )}
    </Link>
  );
}
