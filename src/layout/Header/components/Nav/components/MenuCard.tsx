import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IMenuCard {
  label: string;
  icon?: string | StaticImageData;
  link?: string;
  children?: IMenuCard[];
}

export interface IMenuCardProps {
  menu: IMenuCard;
}

export default function MenuCard({ menu }: IMenuCardProps) {
  const { label, icon, children } = menu;
  
  return (
    <div className="mb-7 first:mt-2">
      <div className="flex items-center gap-3">
        <div className="">
          <Image className="h-9 w-9" src={icon || ''} alt={label} width={72} height={72} quality={100} />
        </div>
        <h6 className="text-[15px] font-medium dark:text-[#B9BABE]">{label}</h6>
      </div>
      <ul className="mt-4 flex flex-col gap-3 pl-12">
        {children?.map((item, index) => (
          <li key={index}>
            <Link className="dark:text-[#B9BABE]" href={item?.link || ''}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
