import avatarImg from '/public/assets/images/avatar.png';
import Image from 'next/image';
import React from 'react';

export default function Avatar() {
  return (
    <div className="h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-lg shadow-[0_4px_14px_2px_rgba(0,0,0,0.08)]">
      <Image
        className="w-full"
        width={50}
        height={50}
        src={avatarImg}
        alt="avatar"
      />
    </div>
  );
}
