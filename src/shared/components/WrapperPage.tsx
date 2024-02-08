import * as React from 'react';

export interface IWrapperPageProps {
  children: React.ReactNode;
}

export default function WrapperPage(props: IWrapperPageProps) {
  return (
    <div className="min-h-screen w-full bg-bgPrimary pt-5 lg:pt-main">
      <div className="mx-auto flex w-main max-w-full flex-col gap-main px-5 pb-5 pt-5 lg:gap-10 lg:px-5 xl:px-0">
        {props.children}
      </div>
    </div>
  );
}
