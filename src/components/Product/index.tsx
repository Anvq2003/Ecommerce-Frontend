import productImage from '/public/assets/images/product.png';
import React from 'react';

import FilterBox from './components/FilterBox';
import Title from '@/components/Title';

import ProductCard, { IProductCard } from './components/ProductCard';

export default function ProductBox() {
  const array: IProductCard[] = [
    {
      urlImage: productImage,
      name: "name product 1  name product 1  name product 1name product 1  name product 1  name product 1 name product 1  name product 1  name product 1  ",
      category: "category",
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: "name product 2 ",
      category: "category",
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: "name product 3 ",
      category: "category",
      price: 123,
      star: 4,
    },
  ];

  return (
    <div className=" mb-[38px]">
      <div className="mb-[30px] flex items-center justify-between">
        <Title title="Total LavAzza 1320" />
        <FilterBox />
      </div>
      <div className="flex gap-[30px]">
        {array.map((item: any, index: number) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
