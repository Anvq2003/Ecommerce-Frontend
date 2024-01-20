import Image from 'next/image';
import * as React from 'react';

export interface ICartItem {
  name: string;
  price: number;
  quantity: number;
  category: string;
  urlImage: any;
  total: number;
}

export interface IProductItemProps {
  data: ICartItem;
}

export default function ProductItem({ data }: IProductItemProps) {
  return (
    <div className="flex justify-between gap-main">
      <div className="h-44 w-44">
        <Image objectFit="contain" src={data.urlImage} width={176} height={176} alt={data?.name} />
      </div>
      <div className="flex flex-1 flex-col gap-4 text-primary">
        <div className="flex gap-80">
          <h3 className="line-clamp-2 font-medium flex-1">{data.name}</h3>
          <h3 className="w-1/6 font-bold">{data.price}</h3>
        </div>
        <h4 className="text-lg font-medium text-secondary">
          {data.price} | <span className="text-green">In Stock</span>
        </h4>
        <div className="">
          
        </div>
      </div>
    </div>
  );
}
