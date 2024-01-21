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
