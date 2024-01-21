import * as React from 'react';

import product from '@/assets/images/product.png';
import BubbleInformation from '@/components/BubbleInformation';
import ProductCart from '@/components/ProductCart';
import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';

export interface ICartPageProps {}

export default function CartPage(props: ICartPageProps) {
  const carts = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '4',
      name: 'Product 4',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '5',
      name: 'Product 5',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '6',
      name: 'Product 6',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '7',
      name: 'Product 7',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '8',
      name: 'Product 8',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
    {
      id: '9',
      name: 'Product 9',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: '100.000.000 đ',
    },
  ];

  return (
    <WrapperPage>
      <BreadcrumbComponent />
      <div className="flex flex-col gap-5 xl:gap-main mx-5 xl:mx-0 lg:flex-row">
        <ProductCart showSelected productList={carts} title="Cart" />
        <BubbleInformation />
      </div>
    </WrapperPage>
  );
}
