import * as React from 'react';
import ProductItem, { IProductItem } from './ProductCard';

export interface IProductListProps {
  productList: IProductItem[];
}

export default function ProductList({ productList }: IProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-main sm:grid-cols-2 lg:grid-cols-3">
      {productList.map((item: any, index: number) => (
        <ProductItem key={index} data={item} />
      ))}
    </div>
  );
}
