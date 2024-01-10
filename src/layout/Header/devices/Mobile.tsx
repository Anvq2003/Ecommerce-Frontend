import { motion } from 'framer-motion';
import React from 'react';

import { Menu } from '@/components/Icons';
import Logo from '@/components/Logo';
import { useDisclosure } from '@nextui-org/react';

import Avatar from '../components/Avatar';
import Sidebar from '../components/Sidebar';

export default function Mobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex h-[82px] items-center justify-between px-5 py-4">
      <motion.div
        whileTap={{ scale: 0.8 }}
        onClick={onOpen}
        className="flex h-12 w-12 cursor-pointer items-center justify-center text-textPrimary dark:bg-bgSecondary"
      >
        <Menu />
      </motion.div>
      <Logo />
      <Avatar />
      <Sidebar isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
