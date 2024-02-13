import { IButton, INoAuth } from '@/layout/Header/types';
import ButtonMain from '@/shared/components/Button';
import * as React from 'react';

export interface INoAuthBoxProps {
  noAuth: INoAuth;
}

export default function NoAuth({}: INoAuthBoxProps) {
  const buttons = [
    {
      text: 'Sign In',
      color: 'yellow',
    },
    {
      text: 'Sign Up',
      color: 'default',
      variant: 'bordered',
    },
  ];

  return (
    <div className="flex items-center justify-end gap-5">
      {buttons?.map((item: any, index: number) => {
        return (
          <ButtonMain color={item?.color} variant={item?.variant} key={index}>
            {item?.text}
          </ButtonMain>
        );
      })}
    </div>
  );
}
