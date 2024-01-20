import * as React from 'react';
import ProductItem, { ICartItem } from './ProductItem';

export interface IProductListProps {
  productList: ICartItem[];
}

export default function ProductList({ productList }: IProductListProps) {
  return (
    <div className="p-main">
      {productList.map((item, index) => (
        <ProductItem key={index} data={item} />
      ))}
    </div>
  );
}
