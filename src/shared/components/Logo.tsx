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

  const attributes = useMemo(() => logo?.data?.attributes, [logo]);
  const urlDark = useMemo(() => logoDark?.data?.attributes, [logoDark]);

  // return <Link href="/">{theme === 'dark' ? <LogoDark /> : <LogoLight />}</Link>;
  
  return (
    <Link href="/">
      {theme === ThemeType?.LIGHT ? (
        <Image
          alt="Logo"
          src={attributes?.url}
          width={attributes?.width}
          height={attributes?.height}
          className="max-h-8 object-contain object-left"
        />
      ) : (
        <Image
          alt="Logo"
          src={urlDark?.url}
          width={urlDark?.width}
          height={urlDark?.height}
          className="max-h-8 object-contain object-left"
        />
      )}
    </Link>
  );
}
