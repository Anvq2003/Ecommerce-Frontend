'use client';

import { ISelectOption } from '@/shared/types';
import * as React from 'react';
import lodash from 'lodash';
import { Select, SelectProps } from "@heroui/react";

export interface ISelectAsyncProps<T = any> extends SelectProps<T | any> {
  items?: ISelectOption[];
}

export default function SelectAsync({ items, ...props }: ISelectAsyncProps) {
  const _options = React.useMemo(() => {
    if (!items) return [];
    if (lodash.isArray(items)) {
      return items.map((option) => {
        if (lodash.isString(option)) {
          return {
            label: option,
            value: option,
            description: option,
          };
        }
        return option;
      });
    }
    return items;
  }, [items]);

  return <Select {...props} items={_options} />;
}
