import * as React from 'react';

interface IMenuChildren {
  icon: any;
  title: string;
  link: string;
}

export interface IMenuItem {
  title: string;
  children: IMenuChildren[];
}

interface IMenuItemProps {
  data: IMenuItem;
}

export default function MenuItem({ data }: IMenuItemProps) {
  return (
    <div>
      <div className="text-lg font-medium leading-6 text-gray-900">{data.title}</div>
      {data.children.map((item, index) => (
        <div key={index} className="mt-4 flex items-stretch justify-between gap-2.5">
          {item.icon}
          <div className="shrink grow basis-auto self-start text-base leading-6 text-gray-900">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
