'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import * as React from 'react';

export interface IBreadcrumbComponentProps {}

export default function BreadcrumbComponent(props: IBreadcrumbComponentProps) {
  const [breadcrumbs, setBreadcrumbs] = React.useState<any[]>([]);

  React.useEffect(() => {
    // remove first language [en, vi]
    const newPath = location.pathname.split('/').slice(2).join('/');
    if (newPath === '/') {
      setBreadcrumbs([{ breadcrumb: 'Home', href: '/' }]);
    } else {
      const pathArray = newPath.split('/').map((path, i) => {
        return {
          breadcrumb: path,
          href:
            '/' +
            newPath
              .split('/')
              .slice(0, i + 1)
              .join('/'),
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, []);

  return (
    <div className="mb-main flex rounded-[10px] bg-bgSecondary p-3 mx-5 xl:mx-0">
      <Breadcrumbs
        variant="solid"
        classNames={{
          list: 'bg-transparent',
        }}
        itemClasses={{
          item: 'text-base font-medium text-secondary data-[current=true]:text-primary hover:text-primary',
          separator: 'text-xl ml-2 mr-5',
        }}
      >
        <BreadcrumbItem key={0} href="/">
          Home
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, i) => (
          <BreadcrumbItem key={i + 1} href={breadcrumb.href}>
            {breadcrumb.breadcrumb}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}
