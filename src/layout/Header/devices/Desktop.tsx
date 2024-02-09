import Logo from '@/components/Logo';
import { ThemeSwitch } from '@/components/ThemeSwitcher';

import ActionRight from '../components/ActionRight';
import Nav from '../components/Nav';
import { Navbar } from '@nextui-org/navbar';
import { IHeaderAttributes } from '../types';

export default function DesktopHeader({ attributes }: IHeaderAttributes) {
  if (!attributes) return null;

  const { logo, logoDark, nav } = attributes;

  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        base: 'h-[110px] bg-bgSecondary dark:shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)]',
        wrapper: 'max-w-[1340px] px-0 mx-auto flex items-center',
      }}
    >
      <div className="mx-auto flex w-main items-center justify-between">
        <Logo logo={logo} logoDark={logoDark} />
        <Nav navBarList={nav} />
        <ThemeSwitch />
        <ActionRight attributes={attributes} />
      </div>
    </Navbar>
  );
}
