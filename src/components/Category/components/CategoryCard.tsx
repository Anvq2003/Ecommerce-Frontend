import Image from "next/image";
import React from "react";

interface ICategoryCard {
  name: string;
  urlImage: string;
  isActive?: boolean;
}

export default function CategoryCard({
  name,
  urlImage,
  isActive = false,
}: ICategoryCard) {
  const bg = isActive ? "bg-bgLightBlue" : "bg-bgSecondary";
  const text = isActive ? "text-white" : "text-textPrimary";
  return (
    <div
      className={`shadow-[0_20px_60px_10px_rgba(237,237,246 0.20)] flex h-[60px] w-[250px] cursor-pointer items-center justify-between rounded-[10px] pl-5 ${bg}`}
    >
      <h3 className={`text-base ${text}`}>{name}</h3>
      <Image
        width={100}
        height={100}
        className="h-full w-[70px] object-cover"
        src={urlImage}
        alt={name}
      />
    </div>
  );
}
