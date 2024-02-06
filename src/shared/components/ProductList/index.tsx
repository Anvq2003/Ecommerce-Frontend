import * as React from 'react';
import ProductItem, { IProductItem } from './components/ProductItem';
import { IGrid } from '@/shared/types';

export interface IProductListProps {
  products: IProductItem[];
  grid: IGrid;
}

export default function ProductList({ products, grid }: IProductListProps) {
  const styles = {
    gridTemplateColumns: `repeat(${grid?.columns || 4}, 1fr)`,
    gap: `${grid?.spacing || 30}px`,
  };

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3`} style={styles}>
      {products && products?.map((item: any, index: number) => <ProductItem key={index} data={item} />)}
    </div>
  );
}
