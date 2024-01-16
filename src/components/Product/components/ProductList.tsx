import * as React from 'react';
import ProductCard, { IProductCard } from './ProductCard';

export interface IProductListProps {
  productList: IProductCard[];
}

export default function ProductList({ productList }: IProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-main lg:grid-cols-3">
      {productList.map((item: any, index: number) => (
        <ProductCard key={index} data={item} />
      ))}
    </div>
  );
}
