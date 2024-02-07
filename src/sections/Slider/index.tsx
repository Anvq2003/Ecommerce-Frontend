import React from 'react';
import Image from 'next/image';
import slider from '/public/assets/images/slider.png';
import { IBaseSection } from '@/shared/types';
interface ISliderProps {
  title: string;
  description: string;
  link: string;
}

export default function Slider({ value, dict }: IBaseSection<ISliderProps>) {
  return (
    <section aria-label="Slider" className="w-full">
      <Image className="rounded-5 object-cover" src={slider} alt="slider" />
    </section>
  );
}
