import { CartIcon, HeartIcon } from '@/components/Icons';
import { Accordion, AccordionItem, NavbarMenu, ScrollShadow } from "@heroui/react";

import { navBarList } from '../../data';
import MenuCard from '../Nav/components/MenuCard';

interface INavbarMenuMobileProps {}

export default function NavbarMenuMobile({}: INavbarMenuMobileProps) {
  const actions = [
    {
      label: 'Cart',
      icon: <CartIcon />,
      number: 2,
      onClick: () => {},
    },
    {
      label: 'Favorite',
      icon: <HeartIcon />,
      number: 2,
      onClick: () => {},
    },
  ];

  const itemClasses = {
    base: 'p-0 w-full',
    title: 'text-[16px] font-medium text-primary',
    trigger: 'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-11 flex items-center',
    indicator: 'text-primary',
  };

  return (
    <NavbarMenu className="mt-2 flex h-full flex-col overflow-y-auto dark:bg-bgPrimary">
      <div>
        {actions.map((action) => (
          <div key={action.label} className="my-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-primary">
                {action.icon}
                <p className="text-[15px] font-medium">{action.label}</p>
              </div>
              <span className="text-[15px] font-medium text-primary">{action.number}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Accordion className="p-0" showDivider={false} itemClasses={itemClasses}>
          {navBarList.map((item, index) => (
            <AccordionItem key={index} aria-label={item.label} title={item.label}>
              <ScrollShadow className="max-h-[500px] w-full px-1">
                {item?.children?.map((child, index) => <MenuCard key={index} menu={child} />)}
              </ScrollShadow>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </NavbarMenu>
  );
}
