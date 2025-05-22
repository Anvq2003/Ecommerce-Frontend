'use client';
import { subtitleStyle, titleStyle } from '@/shared/styles/primitives';
import MyButton from '@/components/Button';
import { Divider, radio } from "@heroui/react";
import * as React from 'react';
import { EScreenType, useDeviceType } from '@/shared/hooks/useDeviceType';
import InformationDesktop from './components/Desktop';
import InformationMobile from './components/Mobile';

export interface IBubbleInformationProps {
  title?: string;
  subtitle?: string;
  textButton: string;
  onClickButton?: () => void;
  radius?: 'sm' | 'md' | 'lg' | 'full';
}

export default function BubbleInformation(props: IBubbleInformationProps) {
  const device = useDeviceType();
  
  return device === EScreenType.DESKTOP ? <InformationDesktop {...props} /> : <InformationMobile {...props} />;
}
