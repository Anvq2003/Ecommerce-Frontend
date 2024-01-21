import * as React from 'react';
import ProductItem, { ICartItem } from './ProductItem';
import useSelectedCart from '../useSelectedCart';
export interface IProductListProps {
  productList: ICartItem[];
  showSelected?: boolean;
  onSelected?: (id: string) => void;
  selectedKeys?: string[];
}

export default function ProductList(props: IProductListProps) {
  const { productList, ...passProps } = props;
  
  return (
    <div className="">
      {productList.map((item, index) => (
        <ProductItem key={index} data={item} {...passProps} />
      ))}
    </div>
  );
}
