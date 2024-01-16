import * as React from 'react';
import CategoryCard, { ICategoryCard } from './CategoryCard';

export interface ICategoryListProps {
  categoryList: ICategoryCard[];
}

export default function CategoryList({ categoryList }: ICategoryListProps) {
  return (
    <div className="grid snap-x auto-cols-[40%] grid-flow-col gap-5 overflow-x-auto overflow-y-hidden lg:flex lg:flex-col lg:gap-4">
      {categoryList.map((item: any, index: number) => (
        <CategoryCard key={index} name={item.name} image={item.url} isActive={item.active} />
      ))}
    </div>
  );
}
