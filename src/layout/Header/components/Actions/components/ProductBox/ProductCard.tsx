import Image from 'next/image';
import * as React from 'react';

export interface IProductCardProps {
  data: any;
}

export default function ProductCard({ data }: IProductCardProps) {
  return (
    <div className="">
      <Image className="mb-[14px] odd:bg-[#F2F2F2]" src={data.image} alt={data.name} width={175} height={175} />
      <div className="text-textPrimary dark:opacity-60">
        <p className="text-sm mb-1">{data.name}</p>
        <h6 className="text-[15px] font-medium">${data.price}</h6>
      </div>
    </div>
  );
}
