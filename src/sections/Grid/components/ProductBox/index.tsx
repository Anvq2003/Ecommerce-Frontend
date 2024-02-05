import * as React from 'react';

import productImage from '@/assets/images/product.png';
import { IProductItem } from '@/components/ProductList/components/ProductItem';
import { IBaseSection } from '@/shared/types';

import { IGridProps } from '../..';
import ProductList from '@/components/ProductList';

export default function ProductBox({ value }: IBaseSection<IGridProps>) {
  const { columns, spacing } = value;
  const array: IProductItem[] = [
    {
      urlImage: productImage,
      name: 'name product 1  name product 1  name product 1name product 1  name product 1  name product 1 name product 1  name product 1  name product 1  ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product 2 ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product 3 ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product4 ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product 5 ',
      category: 'category',
      price: 123,
      star: 4,
    },
  ];
  return <ProductList products={array} columns={columns} spacing={spacing} />;
}
