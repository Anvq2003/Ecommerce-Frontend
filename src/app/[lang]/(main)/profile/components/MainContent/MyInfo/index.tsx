'use client';

import { PhoneIcon } from '@heroicons/react/24/outline';

import Heading from '../Heading';
import InfoList from './components/InfoList';

export interface IMyInfoProps {}

export default function MyInfo(props: IMyInfoProps) {
  const infoList = [
    {
      icon: PhoneIcon,
      title: 'Phone number',
      content: '+000 11122 2345 657',
    },
    {
      icon: PhoneIcon,
      title: 'Phone number',
      content: '+000 11122 2345 657',
    },
    {
      icon: PhoneIcon,
      title: 'Phone number',
      content: '+000 11122 2345 657',
    },
  ];

  return (
    <div className="w-full">
      <Heading title="Account info" subTitle="Addresses, contact information and password" />
      <InfoList infoList={infoList} />
    </div>
  );
}
