import * as React from 'react';

export interface IWrapperPageProps {
  children: React.ReactNode;
  className?: String;
}

export default function WrapperPage({ children, className = '' }: IWrapperPageProps) {
  return (
    <div className="min-h-screen w-full bg-bgPrimary pt-5 lg:pt-main">
      <div className={`mx-auto w-full max-w-full px-5 lg:px-0 xl:w-main ${className}`}>
        {children}
      </div>
    </div>
  );
}
