'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

export interface ICategoryCard {
  title: string;
  image: string | StaticImageData;
  minPrice: number;
  maxPrice: number;
}

interface ICategoryCardProps {
  category: ICategoryCard;
}

export default function CategoryCard({ category }: ICategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex cursor-pointer items-center rounded-[10px] lg:rounded-2xl bg-bgSecondary p-5"
    >
      <div className="mr-5 flex h-20 w-20 items-center justify-center rounded-[10px] bg-white dark:bg-bgPrimary lg:h-24 lg:w-24 lg:rounded-2xl">
        <Image className="object-contain" src={category?.image} alt={category?.title} width={112} height={112} />
      </div>
      <div className="flex-1">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-primary lg:text-[22px]">{category?.title}</h3>
        <p className="text-base font-medium text-primary">{`$${category?.minPrice} - $${category?.maxPrice}`}</p>
      </div>
    </motion.div>
  );
}
