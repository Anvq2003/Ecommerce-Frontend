import category from "/public/assets/images/category.png";
import React from "react";

import { title } from "@/styles/primitives";

import CategoryCard from "./components/CategoryCard";

export default function CategoryBox() {
  const array = [
    {
      name: "Starbucks",
      url: category,
      active: true,
    },
    {
      name: "Starbucks 1",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 2",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 3",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 4",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 5",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 6",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 7",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 8",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 9",
      url: category,
      active: false,
    },
    {
      name: "Starbucks 10",
      url: category,
      active: false,
    },
  ];

  return (
    <div className="mb-5 w-full px-5 lg:mb-0 lg:w-[250px] lg:px-0">
      <h2 className={title({ class: "mb-5" })}>Category</h2>
      <div className="grid snap-x auto-cols-[40%] grid-flow-col gap-5 overflow-x-auto overflow-y-hidden lg:flex lg:flex-col lg:gap-4">
        {array.map((item: any, index: number) => (
          <CategoryCard
            key={index}
            name={item.name}
            urlImage={item.url}
            isActive={item.active}
          />
        ))}
      </div>
    </div>
  );
}
