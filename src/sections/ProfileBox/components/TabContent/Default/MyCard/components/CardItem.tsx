import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

import CardBrand2 from '@/assets/images/card-brand-2.png';
import CardBrand3 from '@/assets/images/card-brand-3.png';
import CardBrand from '@/assets/images/card-brand.png';

export interface ICardItem {
  background: string;
  brand: string | StaticImageData;
  logoBrand: string | StaticImageData;
  logoBrand2: string | StaticImageData;
  numberCard: string;
  nameCard: string;
  expireDate: string;
}

export interface ICardItemProps {
  data: ICardItem;
}

export default function CardItem({ data }: ICardItemProps) {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex w-full grow items-end justify-between gap-0 rounded-xl bg-[#1E2E69] pb-5 pl-5">
        <div className="z-[1] mt-5 flex grow basis-[0%] flex-col items-stretch">
          <div className="flex items-center gap-2">
            <Image
              alt="card-brand"
              src={CardBrand}
              width={14}
              height={16}
              className="my-auto aspect-[0.88] w-3.5 max-w-full shrink-0 overflow-hidden object-contain object-center"
            />
            <div className="text-sm font-medium leading-5 text-white">FeatherCard</div>
          </div>
          <div className="mt-10 whitespace-nowrap text-lg font-medium leading-6 text-white max-md:mt-10">
            1234 4567 8901 2221
          </div>
          <div className="mt-7 flex items-stretch justify-between gap-5 pr-16 max-md:pr-5">
            <div className="flex flex-col items-stretch">
              <div className="whitespace-nowrap text-xs font-medium leading-4 text-white">Card Holder</div>
              <div className="whitespace-nowrap text-xs font-medium leading-4 text-white">Imran Khan</div>
            </div>
            <div className="flex flex-col items-stretch">
              <div className="whitespace-nowrap text-xs font-medium leading-4 text-white">Expired</div>
              <div className="whitespace-nowrap text-xs font-medium leading-4 text-white">10/22</div>
            </div>
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center justify-between self-stretch">
          <Image
            alt="card-brand-2"
            src={CardBrand2}
            className="aspect-square w-[137px] overflow-hidden object-contain object-center"
          />
          <Image
            alt="card-brand-3"
            src={CardBrand3}
            className="z-[1] -mt-3.5 mr-5 aspect-[1.5] w-[42px] max-w-full self-end overflow-hidden object-contain object-center max-md:mr-2.5"
          />
        </div>
      </div>
    </div>
  );
}
