import * as React from 'react';
import ProductItem, { IProductItem } from './components/ProductItem';

export interface IProductListProps {
  products: IProductItem[];
  columns?: number;
  spacing?: number;
}

export default function ProductList({ products, columns, spacing }: IProductListProps) {

  const styles = {
    gridTemplateColumns: `repeat(${columns || 4}, 1fr)`,
    gap: `${spacing || 30}px`,
  };
  
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3`} style={styles}>
      {products && products?.map((item: any, index: number) => <ProductItem key={index} data={item} />)}
    </div>
  );
}
