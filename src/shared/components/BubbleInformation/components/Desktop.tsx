import ButtonMain from '@/components/Button';
import { subtitleStyle, titleStyle } from '@/shared/styles/primitives';
import { Divider } from '@nextui-org/react';

import { IBubbleInformationProps } from '../';

export default function InformationDesktop(props: IBubbleInformationProps) {
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
    <div className="card-main sticky top-0 h-fit w-[30%]">
      {title && <h2 className={titleStyle({ className: 'mb-1 hidden lg:block' })}>{title}</h2>}
      {subtitle && <p className={subtitleStyle({ className: 'mb-main hidden lg:block' })}>{subtitle}</p>}
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
      <ButtonMain onClick={onClickButton} className="mt-main" fullWidth radius={radius} color="yellow" size="large">
        {textButton}
      </ButtonMain>
    </div>
  );
}
