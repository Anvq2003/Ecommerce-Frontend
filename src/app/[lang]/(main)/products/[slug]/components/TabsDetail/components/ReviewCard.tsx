import { StarIcon } from "@/components/Icons";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

export interface IReview {
  name: string;
  avatar: string | StaticImageData;
  content: string;
  rating: number;
  totalRating: number;
}

export interface IReviewCardProps {
  data: IReview;
}

export default function ReviewCard({ data }: IReviewCardProps) {
  return (
    <div className="p-main rounded-2xl bg-[#FAFAFD]">
      <div className="flex gap-5 mb-5">
        <div className="w-1/5">
          <Image
            className="rounded-full object-cover"
            src={data.avatar}
            alt={data.name}
            width={80}
            height={80}
          />
        </div>
        <div className="w-4/5">
          <h2 className="mb-[10px] line-clamp-1 text-[22px] font-medium text-textPrimary">
            {data.name}
          </h2>
          <h4 className="line-clamp-2 font-normal text-textPrimary">
            {data.content}
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          {[...Array(data.rating)].map((_, index) => (
            <StarIcon size={20} key={index} isFilled />
          ))}
        </div>
        <h5 className="text-lg font-medium">({data.totalRating}) reviews</h5>
      </div>
    </div>
  );
}
