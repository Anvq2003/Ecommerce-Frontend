import { Locale } from '@/config/i18n';
import data from './data.json';
import { ISection, sections } from '@/sections/index';
import Header from '@/layout/Header';
import { IPageAttributes, LayoutType } from '@/shared/types';
import RenderSections from './RenderSection';

export interface IPageProps {
  params: {
    lang: Locale;
    slug?: string[] | undefined;
    searchParams: URLSearchParams | undefined;
  };
}

export default async function Page({ params }: IPageProps) {
  const attributes: IPageAttributes = data?.data?.attributes;
  const currentLayout = attributes.layout;
  const currentSections = attributes.sections;

  return (
    <div aria-label="Page" className="bg-bgPrimary">
      {currentLayout === LayoutType.DEFAULT && <Header />}
      <main className="mx-auto flex w-main flex-col gap-main pt-5 lg:gap-10">
        <RenderSections sectionsOfPage={currentSections} />
      </main>
    </div>
  );
}
