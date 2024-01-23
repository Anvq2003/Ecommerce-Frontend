'use client';

import { Checkbox, Divider, Select, SelectItem } from '@nextui-org/react';
import Image from 'next/image';
import * as React from 'react';
import QuantityBox from './components/QuantityBox';
import ActionCart from './components/ActionCart';
import ButtonMain from '@/components/Button';
import { motion } from 'framer-motion';
export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  urlImage: any;
  total: number | string;
}

export interface IProductItemProps {
  data: ICartItem;
  showSelected?: boolean;
  onSelected?: (key: string) => void;
  selectedKeys?: string[];
  showButton?: boolean;
}

export default function ProductItem(props: IProductItemProps) {
  const { data, showButton, selectedKeys, showSelected, onSelected = () => {} } = props;

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between"
      >
        {showSelected && (
          <Checkbox
            isSelected={selectedKeys?.includes(data.id)}
            onValueChange={() => onSelected(data.id)}
            color="warning"
            classNames={{
              icon: 'text-white',
              base: 'self-start md:self-center',
            }}
          />
        )}
        <div className="mr-3 h-14 w-14 md:h-40 md:w-40 lg:mr-main">
          <Image className="object-contain" priority src={data.urlImage} width={176} height={176} alt={data?.name} />
        </div>
        <div className="mb-3 flex max-w-full flex-1 flex-col justify-between gap-3 text-primary">
          <div className="flex flex-col md:flex-row">
            <h3 className="line-clamp-2 flex-1 text-sm font-medium md:text-lg">{data.name}</h3>
            <h3 className="hidden w-2/6 text-end text-lg font-bold md:block">{data.total}</h3>
          </div>
          <h4 className="text-lg font-medium text-secondary">
            {data.price} | <span className="text-green">In Stock</span>
          </h4>
          <div className="flex flex-col gap-3 md:gap-main md:flex-row">
            <div className="flex flex-col gap-2 md:flex-row md:gap-5">
              <Select
                items={animals}
                aria-label="Select an animal"
                placeholder="Select an animal"
                classNames={{
                  base: 'w-32 text-border',
                  trigger: 'px-5 h-11 py-1 border-1 border-border rounded-[10px] bg-transparent',
                  value: 'text-[15px] font-medium',
                  selectorIcon: 'w-5 h-5 text-primary',
                  listboxWrapper: 'text-primary',
                }}
              >
                {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
              </Select>
              <QuantityBox quantity={2} />
            </div>
            <h3 className="w-full text-lg font-bold md:hidden">{data.total}</h3>
            <div className="flex flex-1 items-center lg:justify-end">
              <ActionCart />

              {showButton && (
                <ButtonMain className="ml-auto" color="yellow" size="lg" radius='full'>
                  Check Out
                </ButtonMain>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <Divider className="my-main bg-border" orientation="horizontal" />
    </>
  );
}
