import MyButton from '@/components/Button';
import { Divider } from '@nextui-org/react';
import * as React from 'react';

export interface IBubbleInformationProps {}

export default function BubbleInformation(props: IBubbleInformationProps) {
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
    <div className="card-main shadow-2xl fixed bottom-0 left-0 right-0 h-fit w-full lg:sticky lg:top-0 lg:w-[30%]">
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
      <MyButton className="mt-main" fullWidth radius="full" color="yellow" size="large">
        Continue to checkout
      </MyButton>
    </div>
  );
}
