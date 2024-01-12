import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import * as React from "react";

export interface IBreadcrumbComponentProps {}

export default function BreadcrumbComponent(props: IBreadcrumbComponentProps) {
  return (
    <div>
      <Breadcrumbs variant="solid">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Music</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
        <BreadcrumbItem>Album</BreadcrumbItem>
        <BreadcrumbItem>Song</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
