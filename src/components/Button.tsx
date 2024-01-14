"use client";
import { extendVariants, Button } from "@nextui-org/react";

const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      yellow: "bg-[#FFB700] text-textPrimary font-medium",
      icon: "rounded-lg bg-white text-[14px] text-textPrimary dark:bg-bgPrimary dark:text-white",
    },
    size: {
      icon: "h-[50px] min-w-[50px]",
      medium: "h-[46px] text-lg rounded-md",
    },
  },
  defaultVariants: {
    color: "yellow",
    size: "medium",
  },
});

export default MyButton;
