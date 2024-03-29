import Avatar from './components/Avatar';
import CartBox from './components/CartBox';
import HeartBox from './components/HeartBox';
import SearchBox from './components/SearchBox';

export default function Actions() {
  return (
    <div className="flex items-center justify-end gap-5">
      <SearchBox />

      <div className="flex h-[50px] items-center gap-5 rounded-lg bg-white px-5 dark:bg-bgPrimary">
        <HeartBox />
        <CartBox />
      </div>

      <Avatar />
    </div>
  );
}
