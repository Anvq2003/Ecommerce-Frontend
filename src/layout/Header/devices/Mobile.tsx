import Logo from "@/components/Logo";
import React from "react";
import Avatar from "../components/Avatar";
import { Menu } from "@/components/Icons";
import Sidebar from "../components/Sidebar";
import { useDisclosure } from "@nextui-org/react";

export default function Mobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex h-[82px] items-center justify-between px-5 py-4">
      <div
        onClick={onOpen}
        className="flex h-12 w-12 cursor-pointer items-center justify-center text-textPrimary dark:bg-bgSecondary"
      >
        <Menu />
      </div>
      <Logo />
      <Avatar />
      <Sidebar isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
