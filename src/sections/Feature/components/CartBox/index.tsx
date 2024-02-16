import BubbleInformation from '@/components/BubbleInformation';
import ProductCart from '@/components/ProductCart';
import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';
import { carts } from '@/shared/constants/cart';

export interface ICartBoxProps {}

export default function CartBox(props: ICartBoxProps) {
  return (
    <div className=" flex flex-col gap-5 lg:flex-row xl:gap-main">
      <ProductCart showSelected productList={carts} title="Cart" />
      <BubbleInformation textButton="Continue to Checkout" />
    </div>
  );
}
