import * as React from 'react';
import MyCard from './MyCard';
import MyInfo from './MyInfo';

export interface IMainContentProps {}

export default function MainContent(props: IMainContentProps) {
  return (
    <div className="flex-main flex flex-col items-stretch max-md:ml-0 max-md:w-full">
      <div className="flex w-full grow flex-col items-start rounded-3xl bg-white p-8 shadow-2xl max-md:mt-8 max-md:max-w-full max-md:px-5">
        <MyCard />
        <MyInfo />
      </div>
    </div>
  );
}
