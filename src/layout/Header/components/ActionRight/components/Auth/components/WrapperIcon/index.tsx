import { IBaseData, IImage } from '@/shared/types';
import Image from 'next/image';
import * as React from 'react';

export enum EFormat {
  ICON = 'icon',
  IMAGE = 'image',
}

export interface IWrapperIcon {
  id: number;
  icon: string;
  format: EFormat | string;
  visible: boolean;
  image: IBaseData<IImage> | any;
}

export interface IWrapperIconProps {
  data: IWrapperIcon;
}

export default function WrapperIcon({ data }: IWrapperIconProps) {
  console.log(JSON.parse(data?.icon));
  return (
    data?.visible &&
    (data?.format === EFormat.ICON ? (
      <div
        className="min-h-[24px] min-w-[24px]"
        dangerouslySetInnerHTML={{ __html: JSON.parse(data?.icon)?.component }}
      />
    ) : (
      <Image
        src={data?.image?.url}
        alt={data?.image?.alt}
        width={data?.image?.width}
        height={data?.image?.height}
      />
    ))
  );
}
