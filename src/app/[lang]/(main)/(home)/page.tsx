import CategoryBox from '@/components/Category';
import ProductBox from '@/components/Product';
import Slider from '@/components/Slider';
import WrapperPage from '@/shared/components/WrapperPage';
import { IPageProps } from '@/shared/types';

export default async function HomePage({ params: { lang } }: IPageProps) {
  return (
    <WrapperPage>
      <Slider />
      <CategoryBox />
      <ProductBox />
    </WrapperPage>
  );
}
