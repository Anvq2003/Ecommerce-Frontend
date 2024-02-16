import * as React from 'react';

import { ActionType, IActionItem } from '@/layout/Header/types';

import ActionNormal from './components/ActionNormal';
import CartBox from './components/CartBox';
import HeartBox from './components/HeartBox';

export interface IActionsProps {
  actions: IActionItem[];
}

export default function Actions({ actions }: IActionsProps) {
  const typeAction = {
    [ActionType.HEART]: HeartBox,
    [ActionType.CART]: CartBox,
  };

  return (
    actions?.length && (
      <div className="flex h-[50px] items-center gap-5 rounded-lg bg-white px-5 dark:bg-bgPrimary">
        {actions.map((item, index) => {
          const Comp = typeAction?.[item?.type] || ActionNormal;
          return (
            <>
              {index > 0 && <div className="h-main w-[1px] bg-line" />}
              <Comp key={index} {...item} />
            </>
          );
        })}
      </div>
    )
  );
}
