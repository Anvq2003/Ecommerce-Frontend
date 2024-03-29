import * as React from 'react';
import CategoryCard, { ICategoryCard } from './components/CategoryCard';
import { IGrid } from '@/shared/types';

export interface ICategoryListProps {
  categories: ICategoryCard[];
  grid: IGrid;
}

export default function CategoryList({ categories, grid }: ICategoryListProps) {
  const styles = {
    // gridTemplateColumns: `repeat(${grid?.columns || 4}, 1fr)`,
    // gap: `${grid?.spacing || 30}px`,
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12" style={styles}>
      {categories && categories?.map((item: any, index: number) => <CategoryCard key={index} category={item} />)}
    </div>
  );
}
