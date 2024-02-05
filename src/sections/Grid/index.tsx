import { IBaseSection } from '@/shared/types';

import CategoryBox from './components/CateroryBox';
import ProductBox from './components/ProductBox';

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
  switch (props?.value?.type) {
    case GridType.PRODUCT:
      return <ProductBox {...props} />;

    case GridType.CATEGORY:
      return <CategoryBox {...props} />;

    default:
      return null;
  }
}
