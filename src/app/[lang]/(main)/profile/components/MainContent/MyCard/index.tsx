import * as React from 'react';
import { ICardItemProps } from './components/CardItem';

import CardBrand2 from '@/assets/images/card-brand-2.png';
import CardBrand3 from '@/assets/images/card-brand-3.png';
import CardBrand from '@/assets/images/card-brand.png';
import CardList from './components/CardList';
import Heading from '../Heading';
export interface IMyCardProps {}

export default function MyCard(props: IMyCardProps) {
  const listCard: ICardItemProps[] = [
    {
      data: {
        background: '#1E2E69',
        brand: CardBrand,
        logoBrand: CardBrand2,
        logoBrand2: CardBrand3,
        numberCard: '1234 4567 8901 2221',
        nameCard: 'Imran Khan',
        expireDate: '10/22',
      },
      isAddCard: false,
    },
    {
      data: {
        background: '#1E2E69',
        brand: CardBrand,
        logoBrand: CardBrand2,
        logoBrand2: CardBrand3,
        numberCard: '1234 4567 8901 2221',
        nameCard: 'Imran Khan',
        expireDate: '10/22',
      },
      isAddCard: false,
    },
    {
      data: {
        background: '#1E2E69',
        brand: CardBrand,
        logoBrand: CardBrand2,
        logoBrand2: CardBrand3,
        numberCard: '1234 4567 8901 2221',
        nameCard: 'Imran Khan',
        expireDate: '10/22',
      },
      isAddCard: true,
    },
  ];
  return (
    <>
      <Heading title="Account info" subTitle="Addresses, contact information and password" />
      <CardList cardsList={listCard} />
    </>
  );
}
