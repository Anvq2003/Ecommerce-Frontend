"use client";
import { extendVariants, Button } from "@heroui/react";

const ButtonMain = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      yellow: "bg-[#FFB700] text-primary dark:text-black font-medium",
      icon: "rounded-lg bg-white text-[14px] text-primary dark:bg-bgPrimary dark:text-white",
    },
    size: {
      icon: "h-[50px] min-w-[50px]",
      medium: "h-[46px] text-lg rounded-md",
      large: "h-[68px] text-[22px]",
    },
  },
  defaultVariants: {
    color: "yellow",
    size: "medium",
  },
});

export default ButtonMain;
