import { IBaseSection } from '@/shared/types';
import * as React from 'react';
import CartBox from './components/CartBox';
import FavoriteBox from './components/FavoriteBox';
import CheckoutBox from './components/CheckoutBox';

export enum FeatureType {
  CART = 'cart',
  FAVORITE = 'favorite',
  CHECKOUT = 'checkout',
}

interface IFeatureBoxProps {
  title: string;
  description?: string;
  type: FeatureType;
}

export default function FeatureBox({ value }: IBaseSection<IFeatureBoxProps>) {
  switch (value.type) {
    case FeatureType.CART:
      return <CartBox />;

    case FeatureType.FAVORITE:
      return <FavoriteBox />;
      
    case FeatureType.CHECKOUT:
      return <CheckoutBox />;

    default:
      return null;
  }
}
