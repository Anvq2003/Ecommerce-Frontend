import { IButton, INoAuth } from '@/layout/Header/types';
import ButtonMain from '@/shared/components/Button';
import * as React from 'react';
import WrapperIcon from '../Auth/components/WrapperIcon';

export interface INoAuthBoxProps {
  noAuth: INoAuth;
}
// text: string;
//   iconLeft: string | null;
//   iconRight: string | null;
//   type: EButtonType | string;
//   link: IBaseData<IPageAttributes> | any;
//   linkDetail: string | null;

export default function NoAuth({ noAuth }: INoAuthBoxProps) {
  return (
    <div className="flex items-center justify-end gap-5">
      {noAuth?.buttons?.map((item: IButton, index: number) => {
        return (
          <ButtonMain
            // color='yellow'
            variant='bordered'
            // startContent={<WrapperIcon data={item?.iconLeft} />}
            // endContent={<WrapperIcon data={item?.iconRight} />}
            key={index}
          >
            {item?.text}
          </ButtonMain>
        );
      })}
    </div>
  );
}
