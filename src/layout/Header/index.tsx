'use client';

import { useDeviceType } from "@/shared/hooks/useDeviceType";
import Desktop from "./devices/Desktop";
import Mobile from "./devices/Mobile";

export default function Header() {
  const device = useDeviceType();
  return (
    <header className="bg-bgSecondary">
      {device === "mobile" ? <Mobile /> : <Desktop />}
    </header>
  );
}
