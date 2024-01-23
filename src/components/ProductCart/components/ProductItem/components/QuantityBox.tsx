import { MinusIcon, PlusIcon } from '@/components/Icons';
import * as React from 'react';
import { motion } from 'framer-motion';

export interface IQuantityBoxProps {
  quantity: number;
}

export default function QuantityBox({ quantity }: IQuantityBoxProps) {
  return (
    <div className="flex h-11 w-[115px] items-center justify-between rounded-[10px] border-1 border-border px-5 ">
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="cursor-pointer select-none">
        <MinusIcon />
      </motion.div>
      <div className="text-[15px] font-medium text-primary">{quantity}</div>
      <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="cursor-pointer select-none">
        <PlusIcon />
      </motion.div>
    </div>
  );
}
