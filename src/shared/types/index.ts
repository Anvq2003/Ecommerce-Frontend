import { IconSvgProps } from '@/components/Icons';
import { Locale } from '@/config/i18n';
import { Dictionary } from '../helpers/getDictionary';

export interface IPageProps {
  params: {
    lang: Locale;
  };
}

export interface ISelectOption {
  value: string;
  label: string;

  icon?: React.FC<IconSvgProps> | React.ReactNode;
  description?: string;
  action?: () => void;
  [key: string]: any;
}
export interface ITab {
  key: string;
  title: string | React.ReactNode;
  component: React.FC;
  href?: string;
}

export interface IModal<T = any> {
  open: boolean;
  data?: T;
}

export interface IBaseData<T = any> {
  data: {
    id: number;
    attributes: T;
  };
}

export interface IBaseSection<T = any> {
  value: T | any;
  sections: IBaseSection[];
  dict: Dictionary;
}

export enum LayoutType {
  DEFAULT = 'default',
  ONLY_CONTENT = 'onlyContent',
}

export interface IGrid {
  columns: number;
  spacing: number;
}

export interface IImage {
  name: string;
  width: number;
  height: number;
  url: string;
  
  formats: {
    thumbnail: {
      url: string;
    };
    small?: {
      url: string;
    };
    medium?: {
      url: string;
    };
    large?: {
      url: string;
    };
  };
}

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface IPageAttributes {
  title: string;
  slug: string;
  description: string | null;

  auth: boolean | any;
  layout: LayoutType | any;
  breadcrumbs: boolean | any;
  image: IImage | any;
  sections: IBaseSection[] | any;

  createdAt: string;
  updatedAt: string;
  locale: Locale | string;
  publishedAt: string;
  [key: string]: any;
}
