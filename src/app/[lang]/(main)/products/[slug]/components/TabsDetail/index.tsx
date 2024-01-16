'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ITab } from '@/shared/types';
import { Tab, Tabs } from '@nextui-org/react';

import Description from './components/Description';
import Reviews from './components/Reviews';

export interface ITabsDetailProps {}

export default function TabsDetail(props: ITabsDetailProps) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'description';

  const tabs: ITab[] = [
    {
      key: 'description',
      title: 'Description',
      component: Description,
    },
    {
      key: 'reviews',
      title: 'Reviews',
      component: Reviews,
    },
  ];

  const handleTabChange = (key: any) => {
    const url = `${pathName}?tab=${key}`;
    router.push(url);
  };

  return (
    <div className="">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        selectedKey={tab}
        onSelectionChange={handleTabChange}
        classNames={{
          tabList: 'gap-6 w-full relative rounded-none p-0 mb-5',
          cursor: 'w-full bg-textPrimary',
          tab: 'max-w-fit mr-14 h-12',
          tabContent: 'group-data-[selected=true]:text-textPrimary mb-2 text-[22px] font-medium text-[#9E9DA8]',
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            <tab.component />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
