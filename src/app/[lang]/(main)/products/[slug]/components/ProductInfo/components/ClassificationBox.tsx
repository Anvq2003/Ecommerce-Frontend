import * as React from 'react';
import { Chip } from '@nextui-org/react';

import { ISelectOption } from '@/shared/types';

export interface IClassificationBoxProps {
  title: string;
  options: ISelectOption[];
}

export default function ClassificationBox({ title, options }: IClassificationBoxProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[22px] font-medium text-textPrimary">{title}</h2>
      <div className="flex items-center gap-1">
        {options.map((item, index) => (
          <Chip key={index} radius="sm">
            {item.label}
          </Chip>
        ))}
      </div>
    </div>
  );
}
