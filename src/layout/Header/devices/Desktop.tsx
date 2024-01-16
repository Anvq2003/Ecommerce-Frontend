import Logo from '@/components/Logo';
import { ThemeSwitch } from '@/components/ThemeSwitcher';

import Actions from '../components/Actions';
import Nav from '../components/Nav';

export default function DesktopHeader() {
  return (
    <div className="container relative mx-auto flex h-[110px] flex-row items-center">
      <Logo />
      <Nav />
      <ThemeSwitch />
      <Actions />
    </div>
  );
}
