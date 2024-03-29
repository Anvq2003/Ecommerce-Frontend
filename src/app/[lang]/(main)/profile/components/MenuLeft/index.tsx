import * as React from 'react';

import { UserIcon } from '@heroicons/react/24/outline';

import Avatar from './components/Avatar';
import Menu from './components/Menu';
import { IMenuItem } from './components/Menu/MenuItem';

export interface IMenuLeftProps {}

export default function MenuLeft(props: IMenuLeftProps) {
  const menu: IMenuItem[] = [
    {
      title: 'Thông tin cá nhân',
      children: [
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Personal info',
          link: '/profile/information',
        },
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Addresses',
          link: '/profile/information',
        },
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Communications & privacy',
          link: '/profile/information',
        },
      ],
    },
    {
      title: 'Thông tin cá nhân',
      children: [
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Personal info',
          link: '/profile/information',
        },
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Addresses',
          link: '/profile/information',
        },
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Communications & privacy',
          link: '/profile/information',
        },
      ],
    },
    {
      title: 'Thông tin cá nhân',
      children: [
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Personal info',
          link: '/profile/information',
        },
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Addresses',
          link: '/profile/information',
        },
        {
          icon: <UserIcon className="mr-2 h-6 w-6" />,
          title: 'Communications & privacy',
          link: '/profile/information',
        },
      ],
    },
  ];

  return (
    <div className="flex w-full flex-col items-stretch md:w-1/3 lg:w-1/4">
      <div className="shadow-main flex w-full flex-col items-stretch rounded-3xl bg-white pb-8 dark dark:bg-bgSecondary">
        <Avatar />
        <Menu menu={menu} />
      </div>
    </div>
  );
}
