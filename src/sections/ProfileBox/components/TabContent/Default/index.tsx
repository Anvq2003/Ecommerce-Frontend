import * as React from 'react';

import MyCard from './MyCard';
import MyInfo from './MyInfo';

export interface IMainContentProps {}

export default function MainContent(props: IMainContentProps) {
  return (
    <div className="flex w-full grow flex-col items-start gap-main rounded-3xl max-md:max-w-full">
      <MyCard />
      <MyInfo />
    </div>
  );
}
