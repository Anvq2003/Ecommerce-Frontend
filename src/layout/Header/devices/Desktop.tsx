import Logo from '@/components/Logo';
import { ThemeSwitch } from '@/components/ThemeSwitcher';

import Actions from '../components/Actions';
import Nav from '../components/Nav';
import { Navbar } from '@nextui-org/navbar';
import { IHeaderProps } from '..';

export default function DesktopHeader({ value }: IHeaderProps) {
  const attributes = value?.data?.attributes;

  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        base: 'h-[110px] bg-bgSecondary dark:shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)]',
        wrapper: 'max-w-[1340px] px-0 mx-auto flex items-center',
      }}
    >
      <div className="mx-auto flex w-main items-center justify-between">
        <Logo logo={attributes?.logo} logoDark={attributes?.logoDark} />
        <Nav />
        <ThemeSwitch />
        <Actions />
      </div>
    </Navbar>
  );
}
