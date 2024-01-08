import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IList {
  label: string;
  link: string;
}

export interface IMenuItem {
  image: string;
  label: string;
  list: IList[];
}

export default function MenuItem({ image, label, list }: IMenuItem) {
  return (
    <div className="mb-7 first:mt-2">
      <div className="flex items-center gap-3">
        <div className="">
          <Image className="w-9 h-9" src={image} alt={label} width={72} height={72} quality={100} />
        </div>
        <h6 className="text-[15px] font-medium">{label}</h6>
      </div>
      <ul className="mt-4 pl-12 flex flex-col gap-3">
        {list?.map((item, index) => (
          <li key={index}>
            <Link href={item.link}> {item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
