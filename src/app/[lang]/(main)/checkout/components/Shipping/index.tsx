'use client';

import { EditIcon, PlusIcon } from '@/components/Icons';
import { subtitleStyle, titleStyle } from '@/shared/styles/primitives';
import * as React from 'react';
import { motion } from 'framer-motion';
import ButtonMain from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export interface IShippingProps {}

export default function Shipping(props: IShippingProps) {
  return (
    <div className="card-main flex flex-col gap-main">
      <div className="flex items-center justify-between">
        <h2 className={titleStyle()}>1. Shipping, arrives between Mon, May 16—Tue, May 24</h2>
        <ButtonMain radius="full" color="yellow" startContent={<PlusIcon size={20} />}>
          Add New Address
        </ButtonMain>
      </div>
      <div className="flex items-center justify-between rounded-[20px] bg-bgPrimary p-5">
        <div className="flex flex-col gap-1">
          <h3 className={titleStyle({ size: 'sm' })}>Vo Hoang Long</h3>
          <h4 className={titleStyle({ size: 'sm' })}>0123456789</h4>
          <p className={subtitleStyle()}>
            123 Street Name, City Name, United States, 123456 <br />
          </p>
        </div>
        <ButtonMain isIconOnly variant="light" startContent={<ChevronRightIcon className="h-8 w-8 text-secondary" />} />
      </div>
      <div className="flex items-center justify-between rounded-[20px] bg-bgPrimary p-5">
        <div className="flex flex-col gap-1">
          <h3 className={titleStyle({ size: 'sm' })}>Item details</h3>
          <p className={subtitleStyle()}>2 items, 1 package</p>
        </div>
        <ButtonMain size="lg" variant="light">
          View Details
        </ButtonMain>
      </div>
    </div>
  );
}
