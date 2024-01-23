'use client';

import { PlusIcon } from '@/components/Icons';
import ButtonMain from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { product } from '@/assets/images';
import ProductCart from '@/components/ProductCart';
import { useState } from 'react';
import { checkoutStyle } from '../style';
import { carts } from '@/shared/constants/cart';

export interface IShippingProps {}

export default function Shipping(props: IShippingProps) {
  const { container, title, subtitle } = checkoutStyle();

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="card-main flex flex-col gap-main">
      <div className="flex items-center justify-between">
        <h2 className={title()}>1. Shipping, arrives between Mon, May 16—Tue, May 24</h2>
        <ButtonMain radius="full" color="yellow" startContent={<PlusIcon size={20} />}>
          Add New Address
        </ButtonMain>
      </div>
      <div className={container()}>
        <div className="flex flex-col gap-1">
          <h3 className={title()}>Vo Hoang Long</h3>
          <h4 className={title()}>0123456789</h4>
          <p className={subtitle()}>
            123 Street Name, City Name, United States, 123456 <br />
          </p>
        </div>
        <ButtonMain isIconOnly variant="light" startContent={<ChevronRightIcon className="h-8 w-8 text-secondary" />} />
      </div>

      <div className="rounded-[20px] bg-bgPrimary p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className={title()}>Item details</h3>
            <p className={subtitle()}>2 items, 1 package</p>
          </div>
          <ButtonMain size="lg" variant="light" onClick={() => setShowDetail(!showDetail)}>
            {showDetail ? 'Hide Details' : 'Show Details'}
          </ButtonMain>
        </div>
        {showDetail && (
          <div className="mt-5 flex flex-1">
            <ProductCart hideFooter productList={carts} title="Cart" />
          </div>
        )}
      </div>
    </div>
  );
}
