import BreadcrumbComponent from "@/layout/Breadcrumb";
import * as React from "react";
import ProductInfo from "./components/ProductInfo";
import { getDictionary, Dictionary } from "@/shared/helpers/getDictionary";
import { Locale } from "@/config/i18n";

export interface IDetailPageProps {
  params: {
    slug: string;
    lang: Locale;
  };
}

export default async function DetailPage({
  params: { slug, lang },
}: IDetailPageProps) {
  const dict: Dictionary = await getDictionary(lang);

  return (
    <div className="pt-5 lg:pt-[30px]">
      <div className="mx-auto w-main">
        {/* <BreadcrumbComponent /> */}
        <ProductInfo dict={dict} />
      </div>
    </div>
  );
}
