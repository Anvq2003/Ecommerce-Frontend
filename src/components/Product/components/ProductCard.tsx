import React from "react";
import { HeartIcon, StarIcon } from "../../Icons";
import Image from "next/image";

export interface IProductCard {
  urlImage: any;
  name: string;
  category: string;
  price: number;
  star: number;
}

interface IProductCardProps {
  data: IProductCard;
}

export default function ProductCard({ data }: IProductCardProps) {
  const { urlImage, name, category, price, star } = data;

  return (
    <div className="w-full rounded-[20px] bg-white dark:bg-bgSecondary p-4 shadow-[0_20px_60px_10px_rgba(237,237,246,0.20)] dark:shadow-[0px_20px_60px_10px_rgba(0,0,0,0.20)]">
      <div className="relative m-[10px] mb-4">
        <Image
          width={500}
          height={500}
          src={urlImage}
          alt={name}
          className="w-full cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 flex h-[50px] w-[50px]  cursor-pointer items-center justify-center rounded-full bg-white dark:bg-bgPrimary shadow-[0_20px_60px_rgba(124,124,124,0.4)]">
          <HeartIcon />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="line-clamp-2 min-h-[48px] text-base font-medium text-textPrimary">
          {name}
        </h2>
        <p className="text-[15px] leading-[22px] text-textSecondary">
          {category}
        </p>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-textPrimary">
            ${price}
          </h3>
          <div className="flex items-center gap-[6px]">
            <StarIcon />
            <span className="text-base font-medium text-textPrimary">
              {star}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
