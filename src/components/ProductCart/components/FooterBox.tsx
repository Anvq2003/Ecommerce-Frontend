import ButtonMain from '@/components/Button';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

export interface IFooterBoxProps {}

export default function FooterBox(props: IFooterBoxProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row md:gap-0">
      <ButtonMain size="medium" variant="light" startContent={<ChevronLeftIcon className="h-5 w-5 text-primary" />}>
        Continue Shopping
      </ButtonMain>
      <ButtonMain className="px-10" radius="full" color="yellow" size="large">
        All Check Out
      </ButtonMain>
    </div>
  );
}
