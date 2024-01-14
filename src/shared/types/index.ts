import { Locale } from "@/config/i18n";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IPageProps {
  params: {
    lang: Locale;
  };
}

export interface ISelectOption {
  value: string;
  label: string;
  [key: string]: any;
}
export interface ITab {
  key: string;
  title: string | React.ReactNode;
  component: React.FC;
  href?: string;
}
