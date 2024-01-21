'use client';

import { Checkbox, Divider, Select, SelectItem } from '@nextui-org/react';
import Image from 'next/image';
import * as React from 'react';
import Quantity from './components/QuantityBox';
import QuantityBox from './components/QuantityBox';
import ActionCart from './components/ActionCart';
import ButtonMain from '@/components/Button';

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  urlImage: any;
  total: number;
}

export interface IProductItemProps {
  data: ICartItem;
  isSelected?: boolean;
  onSelected?: (key: string) => void;
}

export default function ProductItem({ data, isSelected, onSelected = () => {} }: IProductItemProps) {
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
      <div className="flex justify-between">
        <Checkbox
          isSelected={isSelected}
          onValueChange={() => onSelected(data.id)}
          color="secondary"
          classNames={{
            icon: 'text-white',
          }}
        />
        <div className="mr-main h-40 w-40 overflow-hidden">
          <Image className="object-contain" priority src={data.urlImage} width={176} height={176} alt={data?.name} />
        </div>
        <div className="mb-3 flex flex-1 flex-col justify-between text-primary">
          <div className="flex">
            <h3 className="line-clamp-2 flex-1 font-medium">{data.name}</h3>
            <h3 className="w-2/6 text-end font-bold">{data.price}</h3>
          </div>
          <h4 className="text-lg font-medium text-secondary">
            {data.price} | <span className="text-green">In Stock</span>
          </h4>
          <div className="flex gap-main">
            <div className="flex gap-5">
              <Select
                items={animals}
                aria-label="Select an animal"
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
            <div className="flex flex-1 items-center justify-end">
              <ActionCart />
              <ButtonMain className='ml-auto' color="yellow" size="lg">
                Check Out
              </ButtonMain>
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-main bg-border" orientation="horizontal" />
    </>
  );
}
