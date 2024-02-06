import React from 'react';
import Image from 'next/image';
import slider from '/public/assets/images/slider.png';
import { IBaseSection } from '@/shared/types';
interface ISliderProps {
  title: string;
  description: string;
  link: string;
}

export default function Slider({ value }: IBaseSection<ISliderProps>) {
  return (
    <section aria-label="Slider" className="w-full px-5 lg:px-0">
      <Image className="rounded-5 object-cover" src={slider} alt="slider" width={1340} height={455} />
    </section>
  );
}
