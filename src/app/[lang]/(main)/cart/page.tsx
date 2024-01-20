import product from '@/assets/images/product.png';
import ProductCart from '@/components/ProductCart';
import WrapperPage from '@/components/WrapperPage';
import BreadcrumbComponent from '@/layout/Breadcrumb';
import * as React from 'react';
import Information from './components/Infomation';

export interface ICartPageProps {}

export default function CartPage(props: ICartPageProps) {
  const carts = [
    {
      name: 'Product 1',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 2',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 3',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 4',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 5',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 6',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 7',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 8',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
    {
      name: 'Product 9',
      price: 100,
      quantity: 1,
      category: 'Category 1',
      urlImage: product,
      total: 100,
    },
  ];

  return (
    <WrapperPage>
      <BreadcrumbComponent />
      <div className="flex gap-main">
        <ProductCart productList={carts} />
        <Information />
      </div>
    </WrapperPage>
  );
}
