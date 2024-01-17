import * as React from 'react';
import ProductCard from './ProductCard';

export interface IProductBoxProps {
  productList: any[];
}

export default function ProductBox({ productList }: IProductBoxProps) {
  return (
    <div className="grid grid-cols-3 gap-main">
      {productList.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </div>
  );
}
