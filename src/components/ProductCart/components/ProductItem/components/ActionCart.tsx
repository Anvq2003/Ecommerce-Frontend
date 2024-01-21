import { DeleteIcon, HeartIcon } from '@/components/Icons';
import { ISelectOption } from '@/shared/types';
import * as React from 'react';

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
          <div key={index} className="flex cursor-pointer items-center text-secondary" onClick={item.action}>
            <Icon />
            <p className="ml-[10px] text-base font-medium text-secondary">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
