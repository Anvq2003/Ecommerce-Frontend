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
  format: EFormat | any;
  visible: boolean;
  image: IBaseData<IImage> | any;
}

export interface IWrapperIconProps {
  data: IWrapperIcon;
  base?: string;
}

export default function WrapperIcon({ data }: IWrapperIconProps) {
  return (
    data?.visible &&
    (data?.format === EFormat.ICON ? (
      <div
        className="min-h-[24px] min-w-[24px]"
        dangerouslySetInnerHTML={{ __html: JSON.parse(data?.icon)?.component }}
      />
    ) : (
      <Image
        src={data?.image?.data?.attributes?.url}
        alt={data?.image?.data?.attributes?.alt}
        // width={data?.image?.data?.attributes?.width}
        // height={data?.image?.data?.attributes?.height}
        width={20}
        height={20}
      />
    ))
  );
}
