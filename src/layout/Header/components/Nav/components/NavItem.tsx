import React, { useState } from 'react';
import MenuCard, { IMenuCardProps } from './MenuCard';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function NavItem({ menu }: IMenuCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!menu?.children)
    return (
      <li>
        <a
          href={'#'}
          className="flex capitalize cursor-pointer whitespace-nowrap  items-center gap-[6px] text-[15px] font-medium leading-[50px] text-primary"
        >
          {menu?.label}
        </a>
      </li>
    );

  return (
    <React.Fragment>
      <div className=""></div>
      {/* <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        // offset={{ mainAxis: 30, crossAxis: 150, alignmentAxis: 100 }}
        offset={{ mainAxis: 30 }}
        allowHover={true}
      >
        <MenuHandler>
          <ListItem
            className="flex cursor-pointer capitalize items-center gap-1.5 text-[15px] font-medium text-primary"
            selected={isMenuOpen}
          >
            {menu?.label}
            <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform  ${isMenuOpen ? 'rotate-180' : ''}`} />
          </ListItem>
        </MenuHandler>
        <MenuList className="w-fit rounded-[20px] bg-white border-none p-7 shadow-[0px_40px_90px_20px_rgba(23,28,40,0.1)] dark:bg-bgPrimary dark:text-white">
          <ul className="grid grid-cols-3 gap-y-main gap-x-16 outline-none outline-0">
            {menu?.children?.map((item, index) => <MenuCard key={index} menu={item} />)}
          </ul>
        </MenuList>
      </Menu> */}
    </React.Fragment>
  );
}
