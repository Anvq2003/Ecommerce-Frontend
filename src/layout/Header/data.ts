import menuIcon from '@/assets/images/menu-icon.png';

import { IMenuCard } from './components/Nav/components/MenuCard';

export const navBarList: IMenuCard[] = [
  {
    label: 'home',
    link: '/home',
  },
  {
    label: 'products',
    link: '/products',
    children: [
      {
        icon: menuIcon,
        label: 'Departments',
        link: '/departments',
        children: [
          {
            label: 'Departments',
            link: '/departments',
          },
          {
            label: 'Departments 2',
            link: '/departments ',
          },
        ],
      },
      {
        icon: menuIcon,
        label: 'Departments',
        children: [
          {
            label: 'Departments',
            link: '/departments',
          },
          {
            label: 'Departments 2',
            link: '/departments ',
          },
        ],
      },
      {
        icon: menuIcon,
        label: 'Departments',
        children: [
          {
            label: 'Departments',
            link: '/departments',
          },
          {
            label: 'Departments 2',
            link: '/departments ',
          },
        ],
      },
      {
        icon: menuIcon,
        label: 'Departments',
        children: [
          {
            label: 'Departments',
            link: '/departments',
          },
          {
            label: 'Departments 2',
            link: '/departments ',
          },
        ],
      },
      {
        icon: menuIcon,
        label: 'Departments',
        children: [
          {
            label: 'Departments',
            link: '/departments',
          },
          {
            label: 'Departments 2',
            link: '/departments ',
          },
        ],
      },
      {
        icon: menuIcon,
        label: 'Departments',
        children: [
          {
            label: 'Departments',
            link: '/departments',
          },
          {
            label: 'Departments 2',
            link: '/departments ',
          },
        ],
      },
    ],
  },
  {
    label: 'about us',
    link: '/about us',
  },
  {
    label: 'contact',
    link: '/contact',
  },
];
