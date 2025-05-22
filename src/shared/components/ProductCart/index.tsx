'use client';

import { titleStyle } from '@/shared/styles/primitives';
import { Checkbox } from "@heroui/react";

import FooterBox from './components/FooterBox';
import { ICartItem } from './components/ProductItem';
import ProductList from './components/ProductList';
import useSelectedCart from './useSelectedCart';

export interface IProductCartProps {
  productList: ICartItem[];
  title: string;
  showSelected?: boolean;
  hideFooter?: boolean;
  showButton?: boolean;
}

export default function ProductCart(props: IProductCartProps) {
  const { productList, showSelected, title, hideFooter, showButton } = props;
  const { selectedKeys, onSelected, onSelectedAll } = useSelectedCart(productList);

  const styleCheckbox = {
    base: 'mb-2',
    icon: 'text-white',
  };

  return (
    <div className="card-main flex-1">
      <h1 className={titleStyle({ className: 'mb-3' })}>{title}</h1>
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
        showButton={showButton}
      />
      {!hideFooter && <FooterBox />}
    </div>
  );
}
