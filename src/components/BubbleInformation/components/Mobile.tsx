import * as React from 'react';
import { IBubbleInformationProps } from '..';
import ButtonMain from '@/components/Button';
import { subtitleStyle, titleStyle } from '@/shared/styles/primitives';

export default function InformationMobile(props: IBubbleInformationProps) {
  const info = [
    {
      title: 'Restaurant',
      value: '100',
    },
    {
      title: 'Total',
      value: '100',
    },
  ];

  return (
    <div className="fixed dark:bg-bgSecondary rounded-t-2xl bg-white bottom-0 left-0 right-0 z-10 flex h-fit w-full items-center justify-between border border-border p-4">
      <div className="">
        {info.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <h2 className={titleStyle({ size: 'sm' })}>{item.title}:</h2>
            <p className={subtitleStyle()}>{item.value}</p>
          </div>
        ))}
      </div>
      <ButtonMain color="yellow" size="medium" radius="sm">
        PayMent
      </ButtonMain>
    </div>
  );
}
