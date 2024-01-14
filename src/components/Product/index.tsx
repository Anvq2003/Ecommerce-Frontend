import productImage from "/public/assets/images/product.png";
import React from "react";

import FilterBox from "./components/FilterBox";

import ProductCard, { IProductCard } from "./components/ProductCard";
import { title } from "@/shared/styles/primitives";

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
    <div className="mb-[38px] px-5 lg:px-0">
      <div className="mb-main flex items-center justify-between">
        <h2 className={title()}>Total LavAzza 1320</h2>
        <FilterBox />
      </div>
      <div className="grid grid-cols-1 gap-main lg:grid-cols-3">
        {array.map((item: any, index: number) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
