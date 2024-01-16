import MyButton from '@/components/Button';
import { CartIcon, HeartIcon, SearchIcon } from '@/components/Icons';

import Avatar from './components/Avatar';
import CartBox from './components/CartBox';
import HeartBox from './components/HeartBox';

export default function Information() {
  return (
    <div className="flex flex-1 items-center justify-end gap-5">
      <MyButton isIconOnly size="icon" color="icon">
        <SearchIcon />
      </MyButton>

      <div className="flex h-[50px] items-center gap-5 rounded-lg bg-white px-5 dark:bg-bgPrimary">
        <HeartBox />
        <CartBox />
      </div>

      <Avatar />
    </div>
  );
}
