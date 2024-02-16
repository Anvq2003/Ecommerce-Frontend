import { motion } from 'framer-motion';
import * as React from 'react';

import { DeleteIcon, HeartIcon } from '@/components/Icons';

export interface IActionCartProps {}

export default function ActionCart(props: IActionCartProps) {
  const listAction = [
    {
      label: 'Save',
      icon: HeartIcon,
      action: () => {},
    },
    {
      label: 'Delete',
      icon: DeleteIcon,
      action: () => {},
    },
  ];

  return (
    <div className="flex items-center gap-main">
      {listAction.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            onClick={item.action}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="flex cursor-pointer items-center text-secondary"
          >
            <Icon />
            <p className="ml-[10px] text-base font-medium text-secondary">{item.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
