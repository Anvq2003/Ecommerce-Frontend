import * as React from 'react';
import ReviewCard, { IReviewCard } from './ReviewCard';

export interface IReviewListProps {
  reviewList: IReviewCard[];
}

export default function ReviewList({ reviewList }: IReviewListProps) {
  return (
    <div className="grid grid-cols-1 gap-main md:grid-cols-2 lg:grid-cols-3">
      {reviewList.map((item, index) => (
        <ReviewCard key={index} data={item} />
      ))}
    </div>
  );
}
