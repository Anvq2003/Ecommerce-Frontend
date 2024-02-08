import * as React from 'react';

import { ISelectOption } from '@/shared/types';
import { CheckboxGroup } from '@nextui-org/react';

import { CustomCheckbox } from './CustomCheckbox';
import { titleStyle } from '@/shared/styles/primitives';

export interface IClassificationBoxProps {
  title: string;
  options: ISelectOption[];
}

export default function ClassificationBox({ title, options }: IClassificationBoxProps) {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-5">
      <h2 className={titleStyle()}>{title}</h2>
      <div className="flex w-full flex-col gap-1">
        <CheckboxGroup
          className="gap-1"
          orientation="horizontal"
          value={groupSelected}
          onChange={(value: any) => setGroupSelected(value)}
        >
          {options.map((item, index) => (
            <CustomCheckbox key={index} value={item.value}>
              {item.label}
            </CustomCheckbox>
          ))}
        </CheckboxGroup>
        {/* <p className="ml-1 mt-4 text-default-500">Selected: {groupSelected.join(', ')}</p> */}
      </div>
    </div>
  );
}
