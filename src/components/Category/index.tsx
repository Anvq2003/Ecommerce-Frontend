import category from '/public/assets/images/category.png';
import React from 'react';

import Title from '@/components/Title';

import CategoryCard from './components/CategoryCard';

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
    <div className="w-[250px]">
      <Title title="Category" className="mb-5" />
      <div className="flex flex-col gap-4">
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