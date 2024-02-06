import * as React from 'react';

export interface IWrapperPageProps {
  children: React.ReactNode;
}

export default function WrapperPage(props: IWrapperPageProps) {
  return (
    <div className="w-full min-h-screen bg-bgPrimary pt-5 lg:pt-main">
      <div className="mx-auto w-full xl:w-main">{props.children}</div>
    </div>
  );
}
