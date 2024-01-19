import { SearchIcon } from '@/components/Icons';
import { Input } from '@nextui-org/input';
import * as React from 'react';

export interface ISearchMobileProps {}

export default function SearchMobile(props: ISearchMobileProps) {
  // "base"｜ "label"｜ "inputWrapper"｜ "innerWrapper"｜ "mainWrapper" ｜ "input" ｜ "clearButton" ｜ "helperWrapper" ｜ "description" ｜ "errorMessage", string>

  const classNames = {
    base: 'w-full',
    inputWrapper: 'border-none shadow-none px-4 bg-white',
    input: 'text-textPrimary text-base',
    clearButton: 'text-textPrimary',
    helperWrapper: 'hidden',
    description: 'hidden',
    errorMessage: 'hidden',
  };

  return (
    <div className="bg-bgPrimary p-5 pb-0">
      <Input
        variant="bordered"
        placeholder="Search for items"
        classNames={classNames}
        endContent={<SearchIcon size={24} className="text-textPrimary" />}
      />
    </div>
  );
}
