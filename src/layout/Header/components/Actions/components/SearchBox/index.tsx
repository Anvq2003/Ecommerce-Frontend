import MyButton from '@/components/Button';
import { SearchIcon } from '@/components/Icons';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface ISearchBoxProps {}

export default function SearchBox(props: ISearchBoxProps) {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const stylesFull = {
    base: 'h-[50px] w-[280px]',
    mainWrapper: 'h-full',
    input: 'text-base',
    inputWrapper: 'px-4 h-full font-normal text-primary bg-white',
  };

  const stylesIcon = {
    base: 'h-[50px] w-[50px]',
    mainWrapper: 'h-full',
    input: 'text-base',
    inputWrapper: 'w-none',
  };

  return (
    <>
      {/* <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
        <Input
          classNames={stylesIcon}
          placeholder="Type to search..."
          size="sm"
          endContent={<SearchIcon size={20} />}
          type="search"
        />
      </motion.div> */}

      <MyButton isIconOnly size="icon" color="icon">
        <SearchIcon size={22}/>
      </MyButton> 
    </>
  );
}
