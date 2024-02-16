import BubbleInformation from '@/components/BubbleInformation';
import ProductCart from '@/components/ProductCart';
import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';
import { carts } from '@/shared/constants/cart';

export interface IFavoriteBoxProps {}

export default function FavoriteBox(props: IFavoriteBoxProps) {
  return <ProductCart showSelected showButton productList={carts} title="Favorite" />;
}
