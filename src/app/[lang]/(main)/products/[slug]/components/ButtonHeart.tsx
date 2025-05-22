import { HeartIcon } from "@/components/Icons";
import { Button } from "@heroui/button";
import * as React from "react";

export interface IButtonHeartProps {}

export default function ButtonHeart(props: IButtonHeartProps) {
  return (
    <Button
      isIconOnly
      className="h-[46px] min-w-[46px] rounded-md border-1 border-[#D2D1D6] bg-transparent"
    >
      <HeartIcon />
    </Button>
  );
}
