import BubbleInformation from '@/components/BubbleInformation';
import ProductCart from '@/components/ProductCart';
import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';
import { carts } from '@/shared/constants/cart';

export interface ICartPageProps {}

export default function CartPage(props: ICartPageProps) {

  return (
    <WrapperPage>
      <BreadcrumbComponent />
      <div className="mx-5 flex flex-col gap-5 lg:flex-row xl:mx-0 xl:gap-main">
        <ProductCart showSelected productList={carts} title="Cart" />
        <BubbleInformation textButton="Continue to Checkout"/>
      </div>
    </WrapperPage>
  );
}
