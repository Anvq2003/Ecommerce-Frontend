import CategoryBox from '@/components/Category';
import ProductBox from '@/components/ProductList';
import Slider from '@/components/Slider';
import { IPageProps } from '@/shared/types';

export default async function HomePage({ params: { lang } }: IPageProps) {
  return (
    <section className="bg-bgPrimary pt-5 lg:pt-main">
      <div className="container flex flex-col gap-5 lg:flex-row lg:gap-main">
        <CategoryBox />
        <div className="flex-1">
          <Slider />
          {/* <ProductBox /> */}
        </div>
      </div>
    </section>
  );
}
