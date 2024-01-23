import ProductCart from '@/components/ProductCart';
import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';
import { carts } from '@/shared/constants/cart';
import * as React from 'react';

export interface IWishlistProps {}

export default function Wishlist(props: IWishlistProps) {
  return (
    <WrapperPage>
      <BreadcrumbComponent />
      <div className="mx-5 xl:mx-0">
        <ProductCart showSelected showButton productList={carts} title="Cart" />
      </div>
    </WrapperPage>
  );
}
