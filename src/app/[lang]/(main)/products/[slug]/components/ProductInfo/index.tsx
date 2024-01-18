'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import * as React from 'react';
import { Button, Chip, Select, SelectItem } from '@nextui-org/react';

import MyButton from '@/components/Button';
import { BagIcon, CartIcon, CompareIcon, HeartIcon, StarIcon } from '@/components/Icons';
import product from '@/images/product.png';
import { Dictionary } from '@/shared/helpers/getDictionary';
import { ISelectOption } from '@/shared/types';

import ButtonHeart from '../ButtonHeart';
import ClassificationBox from './components/ClassificationBox';

export interface IProductInfoProps {
  dict: Dictionary;
}

export default function ProductInfo({ dict }: IProductInfoProps) {
  const listInfo = [
    {
      label: dict?.home?.compare,
      icon: <CompareIcon size={20} />,
    },
    {
      label: dict?.home?.delivery,
      icon: <CartIcon />,
      description: 'From $6 for 1-3 days',
    },
    {
      label: dict?.home?.pickup,
      icon: <BagIcon />,
      description: 'Out of 2 store, today',
    },
  ];

  const classifications = [
    {
      title: dict?.home?.color,
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
      ],
    },
    {
      title: dict?.home?.size,
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
  ];

  return (
    <div className="mx-5 flex flex-col lg:flex-row xl:mx-0">
      {/* Box left */}
      <div className="w-full xl:w-5/12">
        <Image src={product} className="mx-auto" alt="" width={500} height={500} quality={100} />
      </div>

      {/* Box right */}
      <div className="mb-5 flex w-full flex-col gap-main rounded-sm bg-bgPrimary dark:bg-[#171C28] sm:mb-0 md:p-5 lg:p-8 xl:w-7/12 xl:p-[60px]">
        <h1 className="line-clamp-2 text-[26px] font-medium text-textPrimary">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </h1>

        <div className="flex flex-col gap-10 sm:flex-row lg:gap-8 xl:gap-[60px]">
          <div className="flex flex-1 flex-col gap-main">
            <div className="flex gap-4">
              <StarIcon isFilled={true} />
              <h3 className="text-textPrimary">(3.5) 1100 {dict?.home?.reviews}</h3>
            </div>
            {classifications.map((item, index) => (
              <ClassificationBox key={index} title={item.title} options={item.options} />
            ))}
          </div>

          {/* list info */}
          <div className="flex flex-1 flex-col  gap-7">
            {listInfo.map((item, index) => (
              <div key={index} className="flex gap-4 dark:text-white">
                {item.icon}
                <div className="flex flex-col gap-2 text-textPrimary">
                  <h3 className="text-lg font-medium leading-4">{item.label}</h3>
                  {item.description && <p>{item?.description}</p>}
                </div>
              </div>
            ))}

            {/* Box btn */}
            <div className="flex flex-col gap-5 rounded-md border-1 border-[#B9BABE] p-5">
              <div className="flex gap-[10px]">
                <h5 className="text-black dark:text-white">$500.00</h5>
                <div className="bg-[#E1EFDA] px-2 py-0.5 text-[#67B044]">10%</div>
              </div>
              <h1 className="text-black dark:text-white">$540.00</h1>
              <div className="flex gap-4">
                <MyButton color="yellow" size="medium" fullWidth>
                  {dict?.common?.buy}
                </MyButton>
                <ButtonHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
