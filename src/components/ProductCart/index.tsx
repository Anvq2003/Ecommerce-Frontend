'use client';

import { Checkbox } from '@nextui-org/react';

import { ICartItem } from './components/ProductItem';
import ProductList from './components/ProductList';
import useSelectedCart from './useSelectedCart';
import FooterBox from './components/FooterBox';

export interface IProductCartProps {
  productList: ICartItem[];
  title: string;
}

export default function ProductCart({ productList, title }: IProductCartProps) {
  const { onToggle, onToggleAll, selectedKeys } = useSelectedCart(productList);

  const styleCheckbox = {
    base: 'mt-3 mb-2',
    icon: 'text-white',
  };

  return (
    <div className="card-main flex-1">
      <h1 className="text-[22px] font-medium text-primary">{title}</h1>
      <div className="flex items-center">
        <Checkbox
          color="secondary"
          classNames={styleCheckbox}
          onValueChange={onToggleAll}
          isSelected={selectedKeys?.length === productList?.length}
          // icon={selectedKeys?.length < productList?.length ? <PlusCheckBoxIcon /> : undefined}
        >
          {`${selectedKeys?.length} items`}
        </Checkbox>
      </div>
      <ProductList productList={productList} onToggle={onToggle} selectedKeys={selectedKeys} />
      <FooterBox />
    </div>
  );
}
