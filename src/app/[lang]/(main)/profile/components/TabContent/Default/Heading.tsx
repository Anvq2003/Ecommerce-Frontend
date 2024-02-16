import * as React from 'react';

export interface IHeadingProps {
  title: string;
  subTitle: string;
}

export default function Heading(props: IHeadingProps) {
  const { title, subTitle } = props;
  return (
    <div>
      <div className="self-start text-2xl font-bold leading-9">{title}</div>
      <div className="mt-1 self-start whitespace-nowrap text-base leading-6">{subTitle}</div>
    </div>
  );
}
