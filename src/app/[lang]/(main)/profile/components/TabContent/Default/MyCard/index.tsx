'use client';

import { useState } from 'react';

import CardBrand2 from '@/assets/images/card-brand-2.png';
import CardBrand3 from '@/assets/images/card-brand-3.png';
import CardBrand from '@/assets/images/card-brand.png';
import { IModal } from '@/shared/types';

import Heading from '../Heading';
import { ICardItem } from './components/CardItem';
import CardList from './components/CardList';
import ModalAdd from './components/ModalAdd';

export interface IMyCardProps {}

export default function MyCard(props: IMyCardProps) {
  const [modal, setModal] = useState<IModal>({ open: true });

  const listCard: ICardItem[] = [
    {
      background: '#1E2E69',
      brand: CardBrand,
      logoBrand: CardBrand2,
      logoBrand2: CardBrand3,
      numberCard: '1234 4567 8901 2221',
      nameCard: 'Imran Khan',
      expireDate: '10/22',
    },
    {
      background: '#1E2E69',
      brand: CardBrand,
      logoBrand: CardBrand2,
      logoBrand2: CardBrand3,
      numberCard: '1234 4567 8901 2221',
      nameCard: 'Imran Khan',
      expireDate: '10/22',
    },
  ];

  return (
    <>
      <Heading title="Account info" subTitle="Addresses, contact information and password" />
      <CardList cardsList={listCard} onClickAdd={() => setModal({ ...modal, open: true })} />
      <ModalAdd modal={modal} setModal={setModal} />
    </>
  );
}
