import { IconSvgProps } from '@/components/Icons';
import { Locale } from '@/config/i18n';

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
    id: string;
    attributes: T;
  };
}

export interface IBaseSection<T = any> {
  value: T;
  sections: IBaseSection[];
}

export enum LayoutType {
  DEFAULT = 'default',
  ONLY_CONTENT = 'onlyContent',
}

export interface IPageAttributes {
  title: string;
  slug: string;
  description: string;
  auth: boolean;
  createdAt: string;
  updatedAt: string;
  locale: string;
  publishedAt: string;
  layout: LayoutType | string;
  sections: any[];
}
