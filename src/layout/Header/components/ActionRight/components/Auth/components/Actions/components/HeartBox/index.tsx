import { HeartIcon } from '@/components/Icons';
import { IActionItem } from '@/layout/Header/types';
import * as React from 'react';
import WrapperIcon from '../../../WrapperIcon';

export default function HeartBox(props: IActionItem) {
  return (
    <>
      <div className="flex items-center gap-[10px] dark:text-white">
        <WrapperIcon data={props} />
        {props?.showNumber && <span className="text-[15px] font-medium text-primary">03</span>}
      </div>
    </>
  );
}
