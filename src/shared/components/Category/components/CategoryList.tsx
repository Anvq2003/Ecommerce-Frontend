import * as React from 'react';
import CategoryCard, { ICategoryCard } from './CategoryCard';

export interface ICategoryListProps {
  categories: ICategoryCard[];
}

export default function CategoryList({ categories }: ICategoryListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {categories &&
        categories?.map((item: any, index: number) => <CategoryCard key={index} category={item} />)}
    </div>
  );
}
