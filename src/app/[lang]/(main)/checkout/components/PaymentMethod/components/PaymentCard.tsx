import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import { checkoutStyle } from '../../style';
import { Checkbox } from "@heroui/react";
export interface IPaymentCard {
  image: string | StaticImageData;
  name: string;
  day: string;
  price: number | 'free';
  isSelected?: boolean;
}

export interface IPaymentCardProps {
  data: IPaymentCard;
  onSelected?: (id: string) => void;
}

export default function PaymentCard({ data, onSelected }: IPaymentCardProps) {
  const { container, title, description } = checkoutStyle();
  return (
    <div className={container({ className: 'justify-start gap-5 ' })}>
      <div className="shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20) h-[54px] rounded-[10px]">
        <Image className="object-contain" src={data.image} alt={data.name} width={70} height={54} />
      </div>
      <div className="flex flex-col flex-1 gap-2 items-start justify-start sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h2 className={title({ className: 'font-bold' })}>{data.name}</h2>
          <h3 className={description()}>{data?.day}</h3>
        </div>
        <div className="flex items-center gap-3">
          <h4 className={title({ className: 'opacity-50' })}>{data?.price}</h4>
          <Checkbox defaultSelected color="secondary" />
        </div>
      </div>
    </div>
  );
}
