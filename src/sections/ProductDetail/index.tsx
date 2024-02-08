import { Locale } from '@/config/i18n';
import { Dictionary, getDictionary } from '@/shared/helpers/getDictionary';

import ProductInfo from './components/ProductInfo';
import TabsDetail from './components/TabsDetail';
import Breadcrumb from '@/layout/Breadcrumb';
import WrapperPage from '@/components/WrapperPage';
import { IBaseSection } from '@/shared/types';

interface IProductDetailProps {
  gallery: boolean;
  description: boolean;
}

export default async function ProductDetail({ value, dict }: IBaseSection<IProductDetailProps>) {
  return (
    <>
      <ProductInfo dict={dict} />
      <TabsDetail />
    </>
  );
}
