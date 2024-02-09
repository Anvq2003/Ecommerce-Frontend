import MyButton from '@/components/Button';
import { SearchIcon } from '@/components/Icons';

import WrapperIcon, { IWrapperIcon } from '../WrapperIcon';

export interface ISearchBoxProps {
  search: IWrapperIcon;
}

export default function SearchBox({ search }: ISearchBoxProps) {
  return (
    <MyButton isIconOnly size="icon" color="icon">
      <WrapperIcon data={search} />
    </MyButton>
  );
}
