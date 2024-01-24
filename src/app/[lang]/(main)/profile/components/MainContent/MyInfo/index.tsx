'use client';

import InfoList from './components/InfoList';
import { PhoneIcon } from '@heroicons/react/24/outline';

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
    <div className='w-full'>
      <div className="mt-8 self-start text-2xl font-bold leading-9 text-gray-900">Account infoMyCard</div>
      <div className="mt-1 self-start whitespace-nowrap text-base leading-6 text-gray-900">
        Addresses, contact information and password
      </div>
      <InfoList infoList={infoList} />
    </div>
  );
}
