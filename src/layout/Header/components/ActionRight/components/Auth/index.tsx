import * as React from 'react';

import { IAuth } from '@/layout/Header/types';

import MyAvatar from './components/Avatar';
import CartBox from './components/CartBox';
import HeartBox from './components/HeartBox';
import SearchBox from './components/SearchBox';

export interface IAuthBoxProps {
  auth: IAuth;
}

export default function AuthBox({ auth }: IAuthBoxProps) {
  const { account, actions, search } = auth;

  return (
    <div className="flex items-center justify-end gap-5">
      <SearchBox search={search} />

      {actions?.length && (
        <div className="flex h-[50px] items-center gap-5 rounded-lg bg-white px-5 dark:bg-bgPrimary">
          <HeartBox />
          <CartBox />
        </div>
      )}

      {account && <MyAvatar />}
    </div>
  );
}
