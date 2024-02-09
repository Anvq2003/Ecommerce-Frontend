import { IBaseData, IPageAttributes, IImage } from '@/shared/types';
import { EFormat, IWrapperIcon } from './components/ActionRight/components/Auth/components/WrapperIcon';

export interface INavItem {
  id: number;
  label: string;
  disable: boolean | null;
  link: IBaseData<IPageAttributes> | any;
}

interface IActionItem {
  id: number;
  icon: string;
  format: EFormat | string;
  showNumber: boolean;
  visible: boolean;
  image: IBaseData<IImage> | any;
  link: IBaseData<IPageAttributes> | any;
}

export interface IAuth {
  account: boolean;
  search: IWrapperIcon;
  actions: IActionItem[];
}

enum EButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  QUATERNARY = 'quaternary',
}

interface IButton {
  text: string;
  iconLeft: string | null;
  iconRight: string | null;
  type: EButtonType | string;
  link: IBaseData<IPageAttributes> | any;
  linkDetail: string | null;
}

export interface INoAuth {
  buttons: IButton[];
}

export interface IHeader {
  logo: IBaseData<IImage>;
  logoDark: IBaseData<IImage>;
  nav: INavItem[];
  auth: IAuth;
  noAuth: INoAuth;
}

export interface IHeaderProps {
  value: IBaseData<IHeader>;
}

export interface IHeaderAttributes {
  attributes: Pick<IHeader, 'logo' | 'logoDark' | 'nav' | 'auth' | 'noAuth'>;
}
