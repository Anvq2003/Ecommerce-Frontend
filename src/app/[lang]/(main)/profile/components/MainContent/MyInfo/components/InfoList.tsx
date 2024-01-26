import * as React from 'react';
import InfoItem from './InfoItem';

export interface IInfoListProps {
  infoList: any[];
}

export default function InfoList({ infoList }: IInfoListProps) {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-5 ">
      {infoList && infoList.map((item, index) => <InfoItem key={index} data={item} />)}
    </div>
  );
}
