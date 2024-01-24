import * as React from 'react';

export interface IInfo {
  icon: React.ReactNode | any;
  title: string;
  content: string;
}

export interface IInfoItemProps {
  data: IInfo;
}

export default function InfoItem({ data }: IInfoItemProps) {
  const Icon = data.icon;
  return (
    <div className="flex flex-col items-start justify-center rounded-xl bg-neutral-100 py-2.5 pl-2.5 pr-16 max-md:max-w-full max-md:pr-5">
      <div className="flex items-stretch gap-2.5">
        <div className="flex aspect-square h-[54px] w-[54px] flex-col items-center justify-center rounded-lg bg-white px-4">
          <Icon size={24} />
        </div>
        <div className="flex grow flex-col items-stretch self-center">
          <div className="text-base font-medium leading-6 text-gray-900">{data.title}</div>
          <div className="mt-1.5 text-sm whitespace-nowrap leading-5 text-gray-900">{data.content}</div>
        </div>
      </div>
    </div>
  );
}
