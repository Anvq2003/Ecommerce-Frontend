import * as React from 'react';
import CardItem from './CardItem';

export interface ICardListProps {
  cardsList: any[];
}

export default function CardList({ cardsList }: ICardListProps) {
  return (
    <div className="mt-4 self-stretch max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        {cardsList && cardsList.map((item, index) => <CardItem key={index} {...item} />)}
      </div>
    </div>
  );
}
