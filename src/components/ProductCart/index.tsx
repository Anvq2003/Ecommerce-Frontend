import * as React from 'react';
import { ICartItem } from './components/ProductItem';
import ProductList from './components/ProductList';

export interface IProductCartProps {
  productList: ICartItem[];
}

export default function ProductCart(props: IProductCartProps) {
  return (
    <div className="flex-1 card-main">
      <ProductList productList={props.productList} />
    </div>
  );
}
