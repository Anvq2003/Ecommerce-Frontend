import CategoryBox from "@/components/Category";
import ProductBox from "@/components/Product";
import { getLanguage } from "@/shared/helpers/getDictionary";
import Slider from "@/components/Slider";
import { IPageProps } from "@/shared/types";

export default async function Home({ params: { lang } }: IPageProps) {
  return (
    <section className="bg-bgPrimary pt-5 lg:pt-[30px]">
      <div className="container flex flex-col gap-5 lg:flex-row lg:gap-[30px]">
        <CategoryBox />
        <div className="flex-1">
          <Slider />
          <ProductBox />
        </div>
      </div>
    </section>
  );
}
