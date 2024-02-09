import { useState } from 'react';

import Logo from '@/components/Logo';
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react';

import NavbarMenuMobile from '../components/NavbarMenuMobile';
import { IHeaderAttributes } from '../types';

export default function Mobile({ attributes }: IHeaderAttributes) {
  const [isOpen, onOpenChange] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={onOpenChange}
      classNames={{
        base: 'h-[82px] bg-bgSecondary dark:shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)]',
        toggleIcon: 'dark:text-primary',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className="gap-4 sm:flex" justify="center">
        {/* <Logo /> */}
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <Avatar /> */}
      </NavbarContent>

      <NavbarMenuMobile />
    </Navbar>
  );
}
