'use client';

import { useState } from 'react';
import { ICartItem } from './components/ProductItem';
import lodash from 'lodash';

export default function useSelectedCart(productList: ICartItem[]) {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onSelectedAll = (checked: boolean) => {
    if (checked) {
      setSelectedKeys(lodash.map(productList, (item) => item?.id));
    } else {
      setSelectedKeys([]);
    }
  };

  const onSelected = (id: string) => {
    if (selectedKeys?.includes(id)) {
      setSelectedKeys(lodash.filter(selectedKeys, (item) => item !== id));
    } else {
      setSelectedKeys([...selectedKeys, id]);
    }
  };

  return {
    selectedKeys,
    onSelected,
    onSelectedAll,
  };
}
