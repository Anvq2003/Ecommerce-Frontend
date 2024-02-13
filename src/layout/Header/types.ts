import { IBaseData, IPageAttributes, IImage } from '@/shared/types';
import {
  EFormat,
  IWrapperIcon,
} from './components/ActionRight/components/Auth/components/WrapperIcon';

export interface INavItem {
  id: number;
  label: string;
  disable: boolean | null;
  link: IBaseData<IPageAttributes> | any;
}
export enum ActionType {
  HEART = 'heart',
  CART = 'cart',
}

export interface IActionItem {
  type: ActionType | any;
  id: number;
  icon: string | any;
  format: EFormat | any;
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

export interface IButton {
  text: string;
  iconLeft: string | any;
  iconRight: string | any;
  type: EButtonType | any;
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


