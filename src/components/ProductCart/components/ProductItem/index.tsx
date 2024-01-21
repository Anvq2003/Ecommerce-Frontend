'use client';

import { Divider, Select, SelectItem } from '@nextui-org/react';
import Image from 'next/image';
import * as React from 'react';
import Quantity from './components/QuantityBox';
import QuantityBox from './components/QuantityBox';
import ActionCart from './components/ActionCart';

export interface ICartItem {
  name: string;
  price: number;
  quantity: number;
  category: string;
  urlImage: any;
  total: number;
}

export interface IProductItemProps {
  data: ICartItem;
}

export default function ProductItem({ data }: IProductItemProps) {
  const animals = [
    {
      label: 'Cat',
      value: 'cat',
      description: 'A cat',
    },
    {
      label: 'Dog',
      value: 'dog',
      description: 'A dog',
    },
    {
      label: 'Bird',
      value: 'bird',
      description: 'A bird',
    },
  ];

  return (
    <>
      <div className="flex justify-between gap-main">
        <div className="h-40 w-40 overflow-hidden">
          <Image objectFit="contain" src={data.urlImage} width={176} height={176} alt={data?.name} />
        </div>
        <div className="flex flex-1 flex-col justify-between mb-3 text-primary">
          <div className="flex">
            <h3 className="line-clamp-2 flex-1 font-medium">{data.name}</h3>
            <h3 className="w-2/6 text-end font-bold">{data.price}</h3>
          </div>
          <h4 className="text-lg font-medium text-secondary">
            {data.price} | <span className="text-green">In Stock</span>
          </h4>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <Select
                items={animals}
                placeholder="Select an animal"
                classNames={{
                  base: 'w-32 text-border',
                  trigger: 'px-5 h-11 py-1 border-1 border-border rounded-[10px] bg-transparent',
                  value: 'text-[15px] font-medium',
                  selectorIcon: 'w-5 h-5 text-primary',
                }}
              >
                {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
              </Select>
              <QuantityBox quantity={2} />
            </div>
            <ActionCart />
          </div>
        </div>
      </div>
      <Divider className='my-main bg-border' orientation="horizontal" />
    </>
  );
}
