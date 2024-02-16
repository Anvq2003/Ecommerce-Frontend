import { Locale } from '@/config/i18n';
import { home, account, cart, checkout, detail, wishlist, header } from './data';
import Header from '@/layout/Header';
import { IPageAttributes, LayoutType } from '@/shared/types';
import RenderSections from './components/RenderSection';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/shared/helpers/getDictionary';
import BreadcrumbComponent from '@/layout/Breadcrumb';
import { StringNullableChain } from 'lodash';

export interface IPageProps {
  params: {
    lang: Locale;
    slug?: string[] | undefined;
    searchParams: URLSearchParams | undefined;
  };
}

export default async function Page({ params }: IPageProps) {
  const dict = await getDictionary(params.lang);
  const attributes: IPageAttributes = home?.data?.attributes;

  const currentLayout = attributes.layout;
  const currentSections = attributes.sections;
  const showBreadcrumbs = attributes.breadcrumbs;


  return (
    <div aria-label="Page" className="min-h-screen bg-bgPrimary">
      {currentLayout === LayoutType.DEFAULT && <Header value={header} />}
      {showBreadcrumbs && <BreadcrumbComponent />}
      <main className="mx-auto flex w-main max-w-full flex-col gap-main px-5 pb-5 pt-5 lg:gap-10 lg:px-5 xl:px-0">
        <RenderSections sectionsOfPage={currentSections} dict={dict} />
      </main>
    </div>
  );
}
