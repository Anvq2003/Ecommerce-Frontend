import React from 'react';
import Image from 'next/image';
import slider from '/public/assets/images/slider.png';

export default function Slider() {
  return (
    <div className="mb-10 w-full px-5 lg:px-0">
      <Image className="rounded-5 h-full w-full object-cover" src={slider} alt="slider" />
    </div>
  );
}
