import Image, { StaticImageData } from "next/image";
import React from "react";

export interface ICategoryCard {
  name: string;
  image: string | StaticImageData;
  isActive?: boolean;
}

export default function CategoryCard({
  name,
  image,
  isActive = false,
}: ICategoryCard) {
  const bg = isActive ? "bg-bgLightBlue" : "bg-bgSecondary";
  const text = isActive ? "text-white" : "text-textPrimary";

  return (
    <div
      className={`flex mb-1 h-[38px] cursor-pointer items-center justify-between rounded-[10px] pl-[10px] lg:h-[60px] lg:w-[250px] lg:pl-5 ${bg} shadow-[0_20px_60px_10px_rgba(237,237,246 0.20)]`}
    >
      <h3 className={`h-fit text-sm lg:text-base ${text}`}>{name}</h3>
      <Image
        width={100}
        height={100}
        className="h-full w-auto object-contain lg:h-full lg:w-[70px] lg:object-cover"
        src={image}
        alt={name}
      />
    </div>
  );
}
