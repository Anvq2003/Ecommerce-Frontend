'use client';

import { Checkbox } from '@nextui-org/react';

import { ICartItem } from './components/ProductItem';
import ProductList from './components/ProductList';
import useSelectedCart from './useSelectedCart';
import FooterBox from './components/FooterBox';

export interface IProductCartProps {
  productList: ICartItem[];
  title: string;
  showSelected?: boolean;
}

export default function ProductCart({ productList, showSelected, title }: IProductCartProps) {
  const { onSelected, onSelectedAll, selectedKeys } = useSelectedCart(productList);

  const styleCheckbox = {
    base: 'mb-2',
    icon: 'text-white',
  };

  return (
    <div className="card-main flex-1">
      <h1 className="mb-3 text-[22px] font-medium text-primary">{title}</h1>
      {showSelected && (
        <Checkbox
          color="warning"
          classNames={styleCheckbox}
          onValueChange={onSelectedAll}
          isSelected={selectedKeys?.length === productList?.length}
          // icon={selectedKeys?.length < productList?.length ? <PlusCheckBoxIcon /> : undefined}
        >
          {selectedKeys?.length} items
        </Checkbox>
      )}
      <ProductList
        onSelected={onSelected}
        productList={productList}
        showSelected={showSelected}
        selectedKeys={selectedKeys}
      />
      <FooterBox />
    </div>
  );
}
