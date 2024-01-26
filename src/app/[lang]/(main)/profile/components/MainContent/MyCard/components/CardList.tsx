import * as React from 'react';
import CardItem from './CardItem';

export interface ICardListProps {
  cardsList: any[];
}

export default function CardList({ cardsList }: ICardListProps) {
  return (
    <div className="mt-4 self-stretch max-md:max-w-full">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {cardsList && cardsList.map((item, index) => <CardItem key={index} {...item} />)}
      </div>
    </div>
  );
}
