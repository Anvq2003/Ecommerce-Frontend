import BreadcrumbComponent from "@/layout/Breadcrumb";
import * as React from "react";

export interface IDetailPageProps {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params: { slug } }: IDetailPageProps) {
  return (
    <div className="pt-5 lg:pt-[30px]">
      <div className="mx-auto w-main">
        <BreadcrumbComponent />
        sdfjdlsflj
      </div>
    </div>
  );
}
