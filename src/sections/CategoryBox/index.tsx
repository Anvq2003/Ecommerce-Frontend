import * as React from 'react';

import { IBaseSection, IGrid } from '@/shared/types';
import CategoryList from '@/shared/components/CategoryList';
import { ICategoryCard } from '@/shared/components/CategoryList/components/CategoryCard';
import CategoryImage from '@/assets/images/category.png';

interface ICategoryBoxProps {
  title: string;
  grid: IGrid;
  href?: any;
}

export default function CategoryBox({ value }: IBaseSection<ICategoryBoxProps>) {
  const { title, grid } = value;

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
    <section aria-label="Category Box">
      <h2 className="mb-5 text-2xl font-bold text-primary">{title}</h2>
      <CategoryList categories={categories} grid={grid} />
    </section>
  );
}
