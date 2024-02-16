import * as React from 'react';
import MenuItem, { IMenuItem } from './MenuItem';

export interface IMenuProps {
  menu: IMenuItem[];
}

export default function Menu({ menu }: IMenuProps) {
  return (
    <div className="mt-8 flex flex-col gap-main items-stretch pl-10 max-md:pl-5">
      {menu && menu.map((item, index) => <MenuItem key={index} data={item} />)}
    </div>
  );
}
