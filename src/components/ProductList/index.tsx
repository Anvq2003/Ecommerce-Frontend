import * as React from 'react';
import ProductItem, { IProductItem } from './components/ProductItem';

export interface IProductListProps {
  products: IProductItem[];
  columns?: number;
  spacing?: number;
}

export default function ProductList({ products, columns, spacing }: IProductListProps) {
  const className = `grid grid-cols-${columns} gap-[${spacing}px] sm:grid-cols-2 lg:grid-cols-3`;
  return (
    <div className={className}>
      {products && products?.map((item: any, index: number) => <ProductItem key={index} data={item} />)}
    </div>
  );
}
