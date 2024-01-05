import { FilterIcon } from "@/components/Icons";
import React from "react";


export default function FilterBox() {
  return (
    <div className="flex h-9 items-center gap-[14px] rounded-[6px] bg-white px-3 text-base font-medium text-textPrimary dark:bg-bgSecondary">
      Filter <FilterIcon />
    </div>
  );
}
