import { IBaseSection } from '@/shared/types';
import * as React from 'react';
import MenuLeft from './components/MenuLeft';
import PersonalInfo from './components/TabContent/PersonalInfo';
import Default from './components/TabContent/Default';

interface IProfileItemProps {
  title: string;
  icon: string;
  type: string;
}

interface IProfileTabProps {
  id: number;
  title: string;
  items: IProfileItemProps[];
}

interface IProfileBoxProps {
  tabs: IProfileTabProps[];
}

export default function ProfileBox({ value }: IBaseSection<IProfileBoxProps>) {
  return (
    <div className="flex flex-col gap-5 md:flex-row xl:gap-main">
      <MenuLeft />

      <div className="card-main h-fit flex-1">
        {/* <PersonalInfo /> */}
        <Default />
      </div>
    </div>
  );
}
