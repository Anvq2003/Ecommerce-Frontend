import * as React from 'react';
import MyCard from './MyCard';
import MyInfo from './MyInfo';
import InputField from '@/components/Form/InputField';

export interface IMainContentProps {}

export default function MainContent(props: IMainContentProps) {
  

  return (
    <div className="card-main flex-1">
      <div className="flex w-full grow flex-col items-start gap-main rounded-3xl max-md:max-w-full">
        {/* <MyCard />
        <MyInfo /> */}
        <InputField />
      </div>
    </div>
  );
}
