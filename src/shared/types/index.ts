import { Locale } from "@/config/i18n";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IPageProps {
  params: {
    lang: Locale;
    [key: string]: string | string[];
  };
  [key: string]: any;
}

export interface ISelectOption {
  value: string;
  label: string;
  [key: string]: any;
}