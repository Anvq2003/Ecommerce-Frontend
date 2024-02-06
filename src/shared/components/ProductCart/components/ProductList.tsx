import * as React from 'react';
import ProductItem, { ICartItem } from './ProductItem';
export interface IProductListProps {
  productList: ICartItem[];
  showSelected?: boolean;
  onSelected?: (id: string) => void;
  selectedKeys?: string[];
  showButton?: boolean;
}

export default function ProductList(props: IProductListProps) {
  const { productList, ...passProps } = props;

  return (
    <div>
      {productList.map((item, index) => (
        <ProductItem key={index} data={item} {...passProps} />
      ))}
    </div>
  );
}
