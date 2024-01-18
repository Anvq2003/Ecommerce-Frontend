import { Locale } from '@/config/i18n';
import { Dictionary, getDictionary } from '@/shared/helpers/getDictionary';

import ProductInfo from './components/ProductInfo';
import TabsDetail from './components/TabsDetail';
import Breadcrumb from '@/layout/Breadcrumb';

export interface IDetailPageProps {
  params: {
    slug: string;
    lang: Locale;
  };
}

export default async function DetailPage({ params: { slug, lang } }: IDetailPageProps) {
  const dict: Dictionary = await getDictionary(lang);

  return (
    <div className="bg-bgPrimary w-full pt-5 lg:pt-main">
      <div className="mx-auto w-full xl:w-main">
        <Breadcrumb />
        <ProductInfo dict={dict} />
        <TabsDetail />
      </div>
    </div>
  );
}
