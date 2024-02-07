import { Locale } from '@/config/i18n';
import data from './components/data.json';
import Header from '@/layout/Header';
import { IPageAttributes, LayoutType } from '@/shared/types';
import RenderSections from './components/RenderSection';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/shared/helpers/getDictionary';

export interface IPageProps {
  params: {
    lang: Locale;
    slug?: string[] | undefined;
    searchParams: URLSearchParams | undefined;
  };
}

export default async function Page({ params }: IPageProps) {
  const dict = await getDictionary(params.lang);
  const attributes: IPageAttributes = data?.data?.attributes;
  const currentLayout = attributes.layout;
  const currentSections = attributes.sections;

  return (
    <div aria-label="Page" className="bg-bgPrimary">
      {currentLayout === LayoutType.DEFAULT && <Header />}

      <main className="mx-auto flex w-main max-w-full flex-col gap-main px-5 pt-5 pb-5 lg:gap-10 lg:px-5 xl:px-0">
        <RenderSections sectionsOfPage={currentSections} dict={dict} />
      </main>
    </div>
  );
}
