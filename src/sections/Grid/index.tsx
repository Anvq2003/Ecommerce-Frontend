import { IBaseSection } from '@/shared/types';

import CategoryBox from '../CategoryBox';
import ProductBox from '../ProductBox';

enum GridType {
  PRODUCT = 'product',
  CATEGORY = 'category',
}
export interface IGridProps {
  type: GridType;
  columns: number;
  spacing: number;
}

export default function Grid(props: IBaseSection<IGridProps>) {
  
}
