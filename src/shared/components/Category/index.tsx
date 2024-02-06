import category from '@/assets/images/category.png';
import React from 'react';

import { titleStyle } from '@/styles/primitives';

import { ICategoryCard } from './components/CategoryCard';
import CategoryList from './components/CategoryList';

export default function CategoryBox() {
  const array: ICategoryCard[] = [
    {
      name: 'Starbucks',
      image: category,
      isActive: true,
    },
    {
      name: 'Starbucks 1',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 2',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 3',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 4',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 5',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 6',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 7',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 8',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 9',
      image: category,
      isActive: false,
    },
    {
      name: 'Starbucks 10',
      image: category,
      isActive: false,
    },
  ];

  return (
    <div className="mb-5 w-full px-5 lg:mb-0 lg:w-[250px] lg:px-0">
      <h2 className={titleStyle({ size: 'lg', class: 'mb-5' })}>Category</h2>
      <CategoryList categoryList={array} />
    </div>
  );
}
