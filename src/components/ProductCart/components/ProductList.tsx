import * as React from 'react';
import ProductItem, { ICartItem } from './ProductItem';
import useSelectedCart from '../useSelectedCart';

export interface IProductListProps {
  productList: ICartItem[];
  onToggle?: (key: string) => void;
  selectedKeys?: string[];
}

export default function ProductList({ productList, onToggle, selectedKeys }: IProductListProps) {
  return (
    <div className="">
      {productList.map((item, index) => (
        <ProductItem key={index} data={item} onSelected={onToggle} isSelected={selectedKeys?.includes(item.id)} />
      ))}
    </div>
  );
}
