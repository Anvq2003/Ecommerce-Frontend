"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import * as React from "react";

export interface IBreadcrumbComponentProps {}

export default function BreadcrumbComponent(props: IBreadcrumbComponentProps) {
  const router = useRouter();

  React.useEffect(() => {
    // if (router) {
    //   const linkPath = router?.asPath?.split("/");
    //   linkPath.shift();

    //   const pathArray = linkPath.map((path, i) => {
    //     return {
    //       breadcrumb: path,
    //       href: "/" + linkPath.slice(0, i + 1).join("/"),
    //     };
    //   });

    //   setBreadcrumbs(pathArray);
    // }
  }, [router]);


  return (
    <div className="mb-main w-full rounded-[10px] bg-bgPrimary p-3 ">
      <Breadcrumbs
        variant="solid"
        classNames={{
          list: "bg-transparent",
        }}
        itemClasses={{
          item: "text-base font-medium text-textSecondary data-[current=true]:text-textPrimary hover:text-textPrimary",
          separator: "text-xl ml-2 mr-5",
        }}
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Music</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
        <BreadcrumbItem>Album</BreadcrumbItem>
        <BreadcrumbItem>Song</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
