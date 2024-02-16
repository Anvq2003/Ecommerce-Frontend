import MyButton from '@/components/Button';
import { SearchIcon } from '@/components/Icons';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface ISearchBoxProps {}

export default function SearchBox(props: ISearchBoxProps) {
  return (
    <>
      <MyButton isIconOnly size="icon" color="icon">
        <SearchIcon size={22} />
      </MyButton>
    </>
  );
}
