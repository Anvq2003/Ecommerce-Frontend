import * as React from 'react';
interface IGrid {
  type: 'product' | 'category';
  columns: number;
  spacing: number;
}

export interface IGridProps {
  value: IGrid;
  sections: any;
}

export default function Grid(props: IGridProps) {
  return <div>grid</div>;
}
