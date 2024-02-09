import { HeartIcon } from '@/components/Icons';
import * as React from 'react';

export interface IHeartBoxProps {}

export default function HeartBox(props: IHeartBoxProps) {
  return (
    <>
      <div className="flex items-center gap-[10px] dark:text-white">
        <HeartIcon />
        <span className="text-[15px] font-medium text-primary">03</span>
      </div>
      <div className="h-main w-[1px] bg-line"></div>
    </>
  );
}
