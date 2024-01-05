import Link from "next/link";
import React from "react";
import { LogoDark, LogoLight } from "@/components/Icons";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/">{theme === "dark" ? <LogoDark /> : <LogoLight />}</Link>
  );
}
