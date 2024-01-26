'use client';

import { PlusIcon } from '@/components/Icons';
import * as React from 'react';
import { motion } from 'framer-motion';

export interface ICardPlusProps {}

export default function CardPlus(props: ICardPlusProps) {
  return (
    <div className="flex cursor-pointer flex-col items-stretch max-md:ml-0 max-md:w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex w-full grow flex-col items-center justify-center rounded-xl border border-dashed border-[color:var(--Secondary-Color-Secondary-3,#D2D1D6)] px-20 py-12 max-md:px-5"
      >
        <PlusIcon size={24} />
        <div className="mt-3.5 whitespace-nowrap text-sm font-medium leading-5 text-zinc-300">Add New Card</div>
      </motion.div>
    </div>
  );
}
