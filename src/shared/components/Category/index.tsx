import category from '@/assets/images/category.png';
import React from 'react';

import { titleStyle } from '@/styles/primitives';

import { ICategoryCard } from './components/CategoryCard';
import CategoryList from './components/CategoryList';
import CategoryImage from '@/assets/images/category.png';

export default function CategoryBox() {
  const categories: ICategoryCard[] = [
    {
      image: CategoryImage,
      title:
        'Lorem ipsum dolor, ndi similique amet nam delectus consectetur dicta. Saepe est iure molestias, ipsam fuga consectetur corporis deleniti officiis.',
      minPrice: 100,
      maxPrice: 200,
    },
    {
      image: CategoryImage,
      title: 'Category 2:',
      minPrice: 100,
      maxPrice: 200,
    },
    {
      image: CategoryImage,
      title: 'Category 3:',
      minPrice: 100,
      maxPrice: 200,
    },
  ];
  return (
    <section className="mb-10">
      <h2 className={titleStyle({ size: 'lg', class: 'mb-5' })}>Category</h2>
      <CategoryList categories={categories} />
    </section>
  );
}
