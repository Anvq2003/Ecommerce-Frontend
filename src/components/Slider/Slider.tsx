import React from "react";
import Image from "next/image";
import slider from "/public/assets/images/slider.png";

export default function Slider() {
  return (
    <div className="mb-10 w-full rounded-[20px]">
      <Image className="w-full" src={slider} alt="slider" />
    </div>
  );
}
