'use client';
import { subtitleStyle, titleStyle } from '@/shared/styles/primitives';
import MyButton from '@/components/Button';
import { Divider, radio } from '@nextui-org/react';
import * as React from 'react';

export interface IBubbleInformationProps {
  title?: string;
  subtitle?: string;
  textButton: string;
  onClickButton?: () => void;
  radius?: 'sm' | 'md' | 'lg' | 'full';
}

export default function BubbleInformation(props: IBubbleInformationProps) {
  const { title, radius = 'full', subtitle, textButton, onClickButton } = props;
  const info = [
    {
      title: 'Subtotal',
      subtitle: 'items',
      value: '100',
      divider: false,
    },
    {
      title: 'Price',
      subtitle: 'Total',
      value: '0',
      divider: false,
    },
    {
      title: 'Shipping',
      value: '100',
      divider: false,
    },
    {
      title: 'Total',
      value: '100',
      divider: true,
    },
  ];

  return (
    <div className="card-main fixed bottom-0 left-0 right-0 h-fit w-full shadow-2xl lg:sticky lg:top-0 lg:w-[30%]">
      {title && <h2 className={titleStyle({ className: 'mb-1' })}>{title}</h2>}
      {subtitle && <p className={subtitleStyle({ className: 'mb-main' })}>{subtitle}</p>}
      <div className="flex flex-col gap-[14px]">
        {info.map((item, index) => (
          <>
            {item.divider && <Divider orientation="horizontal" className="bg-border" />}
            <div key={index} className="flex items-center justify-between">
              <div className="text-base font-medium text-primary">
                {item.title}
                &nbsp;
                {item?.subtitle && <span className="font-normal">({item?.subtitle})</span>}
              </div>
              <div className="text-base font-bold text-primary">{item.value}</div>
            </div>
          </>
        ))}
      </div>
      <MyButton onClick={onClickButton} className="mt-main" fullWidth radius={radius} color="yellow" size="large">
        {textButton}
      </MyButton>
    </div>
  );
}
