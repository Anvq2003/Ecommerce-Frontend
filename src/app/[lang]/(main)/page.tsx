import CategoryBox from '@/components/Category';
import ProductBox from '@/components/Product';
import { Locale } from '@/config/i18n';
import { getLanguage } from '@/shared/helpers/getLanguage';
import Slider from '@/components/Slider';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getLanguage(lang);
  return (
    <section className="container flex flex-col gap-5 lg:flex-row lg:gap-[30px]">
      <CategoryBox />
      <div className="flex-1">
        <Slider />
        <ProductBox />
      </div>
    </section>
  );
}
