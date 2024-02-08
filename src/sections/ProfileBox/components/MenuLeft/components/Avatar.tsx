import Image from 'next/image';
import * as React from 'react';

import AvatarMain from '@/assets/images/avatar.png';
import BgAvatar from '@/assets/images/bg-profile.png';

export interface IAvatarProps {}

export default function Avatar(props: IAvatarProps) {
  return (
    <div className="relative flex aspect-[1.4024390243902438] w-full flex-col items-stretch justify-center overflow-hidden rounded-t-[20px] shadow-2xl">
      <Image
        src={BgAvatar}
        alt="Background Avatar"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={345}
        height={246}
      />
      <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-[rgba(26,22,46,0.00)] to-[#1A162E]" />
      <div className="relative z-20 flex flex-col items-stretch rounded-3xl pb-5 shadow-2xl  md:pb-10 lg:pb-0">
        <Image
          src={AvatarMain}
          width={116}
          height={116}
          alt="Avatar"
          className="aspect-square w-[116px] max-w-full  self-center overflow-hidden rounded-[50%] border-4 border-[rgba(255,255,255,0.20)] object-contain object-center shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)]"
        />
        <div className="mt-5 self-center whitespace-nowrap text-center text-lg font-bold leading-6 text-white">
          Imran Khan
        </div>
        <div className="text-slate-50 whitespace-nowrap text-center text-base font-medium leading-6">
          Registered: 17th May 2022
        </div>
      </div>
    </div>
  );
}
