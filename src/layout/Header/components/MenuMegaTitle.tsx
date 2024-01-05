import React from 'react';

interface MenuMegaBoxIcon {
  title: string;
  backgroundIcon: React.ReactNode;
  icon: React.ReactNode;
}

export default function MenuMegaTitle({ title, icon, backgroundIcon }: MenuMegaBoxIcon) {
  return (
    <div className="w-9 h-9 flex items-center gap-[14px]">
      <div className="h-full w-9 relative">
        {backgroundIcon}
        <div className="absolute bottom-0 right-0">{icon}</div>
      </div>
      <h3 className="text-base">{title}</h3>
    </div>
  );
}
