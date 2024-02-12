
import { IAuth } from '@/layout/Header/types';

import Actions from './components/Actions';
import MyAvatar from './components/Avatar';
import SearchBox from './components/SearchBox';

export interface IAuthBoxProps {
  auth: IAuth;
}

export default function Auth({ auth }: IAuthBoxProps) {
  const { account, actions, search } = auth;

  return (
    <div className="flex items-center justify-end gap-5">
      <SearchBox search={search} />
      <Actions actions={actions} />
      {account && <MyAvatar />}
    </div>
  );
}
