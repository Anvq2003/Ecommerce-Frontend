import MyButton from '@/components/Button';
import { SearchIcon } from '@/components/Icons';

export interface ISearchBoxProps {}

export default function SearchBox(props: ISearchBoxProps) {

  return (
    <>
      <MyButton isIconOnly size="icon" color="icon">
        <SearchIcon size={22} />
      </MyButton>
    </>
  );
}
