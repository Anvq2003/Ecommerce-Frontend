import { CartIcon } from '@/components/Icons';
import { Divider, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import * as React from 'react';
import product from '@/images/product.png';
import ProductBox from './ProductBox';
import MyButton from '@/components/Button';

export interface ICartBoxProps {}

export default function CartBox(props: ICartBoxProps) {
  const list = [
    {
      name: 'Nike Air Max 270 React ENG',
      price: 160,
      image: product,
    },
    {
      name: 'Nike Air Max 270 React ENG',
      price: 160,
      image: product,
    },
    {
      name: 'Nike Air Max 270 React ENG',
      price: 160,
      image: product,
    },
  ];

  const info = [
    {
      label: 'Subtotal',
      value: '$160',
    },
    {
      label: 'Texes:',
      value: 'Free',
    },
    {
      label: 'Shipping',
      value: 'Free',
    },
    {
      label: 'Total',
      value: '$160',
    },
  ];

  const content = (
    <PopoverContent className="w-[700px] shadow-[0px_40px_90px_20px_rgba(200,200,200,0.40)] dark:bg-bgPrimary dark:shadow-[0px_40px_90px_20px_rgba(23,28,40,0.40)]">
      <div className="flex flex-col gap-main py-main">
        <h2 className="text-[22px] font-medium text-primary dark:opacity-60">You have 3 item</h2>
        <ProductBox productList={list} />
        <Divider orientation="horizontal" />
        <div className="flex flex-col gap-5">
          {info.map((item, index) => (
            <div key={index} className="flex items-center justify-between  last:font-medium dark:opacity-60">
              <p className="text-[22px] text-primary">{item.label}</p>
              <p className="text-[22px] text-primary">{item.value}</p>
            </div>
          ))}
        </div>
        <Divider orientation="horizontal" />
        <MyButton className="w-1/2 self-end" color="yellow" radius='full' size="large">
          Check out all
        </MyButton>
      </div>
    </PopoverContent>
  );

  return (
    <Popover key={'bottom'} showArrow offset={30} placement="bottom-end" backdrop="transparent">
      <PopoverTrigger>
        <div className="flex cursor-pointer items-center gap-[10px] dark:text-white">
          <CartIcon />
          <span className="text-[15px] font-medium text-primary">$65:20</span>
        </div>
      </PopoverTrigger>
      {content}
    </Popover>
  );
}
