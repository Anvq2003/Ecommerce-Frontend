import * as React from 'react';
import InfoItem from './InfoItem';

export interface IInfoListProps {
  infoList: any[];
}

export default function InfoList({ infoList }: IInfoListProps) {
  return (
    <div className="mt-4 grid grid-cols-2 justify-between gap-5">
      {infoList && infoList.map((item, index) => <InfoItem key={index} data={item} />)}
    </div>
  );
}
