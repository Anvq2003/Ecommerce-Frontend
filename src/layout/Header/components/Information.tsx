import { CartIcon, HeartIcon, SearchIcon } from "@/components/Icons";
import Avatar from "./Avatar";

export default function Information() {
  return (
    <div className="flex flex-1 items-center justify-end gap-5">
      <div className="flex items-center justify-center rounded-lg bg-white p-[13px] text-[14px] font-medium text-textPrimary dark:bg-bgPrimary dark:text-white">
        <SearchIcon />
      </div>

      {/* Info */}
      <div className="flex h-[50px] items-center gap-5 rounded-lg bg-white px-5 dark:bg-bgPrimary">
        <div className="flex items-center gap-[10px]">
          <HeartIcon />
          <span className="text-[15px] font-medium text-textPrimary">03</span>
        </div>
        <div className="h-[30px] w-[1px] bg-line "></div>
        <div className="flex items-center gap-[10px]">
          <CartIcon />
          <span className="text-[15px] font-medium text-textPrimary">
            $65:20
          </span>
        </div>
      </div>

      {/* Avatar */}
      <Avatar />
    </div>
  );
}
