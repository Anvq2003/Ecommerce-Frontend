import * as React from 'react';
import CardItem from './CardItem';
import CardPlus from './CardPlus';
import { data } from 'autoprefixer';

export interface ICardListProps {
  cardsList: any[];
  onClickAdd?: () => void;
}

export default function CardList({ cardsList, onClickAdd }: ICardListProps) {
  return (
    <div className="mt-4 self-stretch max-md:max-w-full">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <CardPlus onClickAdd={onClickAdd} />
        {cardsList && cardsList.map((item, index) => <CardItem key={index} data={item} />)}
      </div>
    </div>
  );
}
