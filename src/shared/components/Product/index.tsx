import productImage from '/public/assets/images/product.png';
import React from 'react';

import FilterBox from './components/FilterBox';

import ProductCard, { IProductItem } from './components/ProductCard';
import { titleStyle } from '@/shared/styles/primitives';
import ProductList from './components/ProductList';

export default function ProductBox() {
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
  ];

  return (
    <section className="px-5 lg:px-0">
      <div className="mb-main flex items-center justify-between">
        <h2 className={titleStyle({ size: 'lg' })}>Total LavAzza 1320</h2>
        <FilterBox />
      </div>
      <ProductList productList={array} />
    </section>
  );
}
