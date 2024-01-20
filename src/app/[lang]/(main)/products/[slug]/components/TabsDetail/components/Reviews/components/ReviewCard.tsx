import { StarIcon } from '@/components/Icons';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

export interface IReviewCard {
  name: string;
  avatar: string | StaticImageData;
  content: string;
  rating: number;
  totalRating: number;
}

export interface IReviewCardProps {
  data: IReviewCard;
}

export default function ReviewCard({ data }: IReviewCardProps) {
  const { avatar, name, content, rating, totalRating } = data;
  
  return (
    <div className="rounded-2xl bg-[#FAFAFD] dark:bg-bgSecondary p-main">
      <div className="mb-5 flex gap-5">
        <div className="w-1/5">
          <Image className="rounded-full object-cover" src={avatar} alt={name} width={80} height={80} />
        </div>
        <div className="w-4/5">
          <h2 className="mb-[10px] line-clamp-1 text-[22px] font-medium text-primary">{name}</h2>
          <h4 className="line-clamp-2 font-normal text-primary">{content}</h4>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          {[...Array(rating)].map((_, index) => (
            <StarIcon size={20} key={index} isFilled />
          ))}
        </div>
        <h5 className="text-lg font-medium dark:text-white">({totalRating}) reviews</h5>
      </div>
    </div>
  );
}
