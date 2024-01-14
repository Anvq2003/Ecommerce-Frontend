import { title } from "@/shared/styles/primitives";
import * as React from "react";
import Avatar from "@/images/avatar.png";
import { StaticImageData } from "next/image";
import ReviewCard, { IReview } from "./ReviewCard";

export interface IReviewsProps {}

export default function Reviews(props: IReviewsProps) {
  const list: IReview[] = [
    {
      name: "John Doe",
      avatar: Avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      rating: 4,
      totalRating: 5,
    },
    {
      name: "John Doe 2",
      avatar: Avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      rating: 4,
      totalRating: 5,
    },
    {
      name: "John Doe 2",
      avatar: Avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      rating: 4,
      totalRating: 5,
    },
  ];
  return (
    <div>
      <h2 className={title({ className: "mb-main" })}>
        What our customers are saying
      </h2>
      <div className="grid grid-cols-3 gap-main">
        {list.map((item, index) => (
          <ReviewCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
