"use client";

import { useDeviceType } from "@/shared/hooks/useDeviceType";
import Desktop from "./devices/Desktop";
import Mobile from "./devices/Mobile";

export default function Header() {
  const device = useDeviceType();
  return (
    <>
      <header className="fixed z-30 left-0 right-0 top-0 bg-bgSecondary dark:shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)]">
        {device === "desktop" ? <Desktop /> : <Mobile />}
      </header>
      <div className={device === "mobile" ? "h-[82px]" : "h-[110px]"}></div>
    </>
  );
}
