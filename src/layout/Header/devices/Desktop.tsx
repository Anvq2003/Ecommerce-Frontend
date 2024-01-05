import Logo from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import Information from "../components/Information";
import NavBar from "../components/NavBar";

export default function DesktopHeader() {
  return (
    <div className="container relative mx-auto flex h-[110px] flex-row items-center">
      <Logo />
      <NavBar />
      <ThemeSwitcher />
      <Information />
    </div>
  );
}
