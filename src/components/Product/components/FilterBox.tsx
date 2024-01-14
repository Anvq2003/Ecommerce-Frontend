// 'use client';

import { FilterIcon } from "@/components/Icons";
import { selectDictionary } from "@/lib/features/settings/settingsSlice";
import { useAppSelector } from "@/lib/hooks";
import { getLanguage } from "@/shared/helpers/getDictionary";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";

export default async function FilterBox() {
  // const dict = await getLanguage(lang);

  return (
    <Popover showArrow placement="bottom-end">
      <PopoverTrigger>
        <div className="flex h-9 items-center gap-[14px] rounded-[6px] bg-white px-3 text-base font-medium text-textPrimary dark:bg-bgSecondary">
          Filter <FilterIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-10/12 bg-white p-[30px] shadow-[0px_40px_90px_rgba(200,200,200,0.40)]">
          <h2></h2>
          <div className="gird grid-cols-3">
            <div className=""></div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
