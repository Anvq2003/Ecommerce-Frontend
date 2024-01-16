import { CartIcon } from '@/components/Icons';
import { Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import * as React from 'react';

export interface ICartBoxProps {}

export default function CartBox(props: ICartBoxProps) {
  
  const content = (
    <PopoverContent className="w-[240px]">
      <div className="w-full px-1 py-2">
        <p className="text-small font-bold text-foreground">Dimensions</p>
        <div className="mt-2 flex w-full flex-col gap-2">
          <Input defaultValue="100%" label="Width" size="sm" variant="bordered" />
          <Input defaultValue="300px" label="Max. width" size="sm" variant="bordered" />
          <Input defaultValue="24px" label="Height" size="sm" variant="bordered" />
          <Input defaultValue="30px" label="Max. height" size="sm" variant="bordered" />
        </div>
      </div>
    </PopoverContent>
  );

  return (
    <Popover key={'bottom'} showArrow offset={30} placement="bottom-end" backdrop="transparent">
      <PopoverTrigger>
        <div className="flex items-center gap-[10px] dark:text-white">
          <CartIcon />
          <span className="text-[15px] font-medium text-textPrimary">$65:20</span>
        </div>
      </PopoverTrigger>
      {content}
    </Popover>
  );
}
