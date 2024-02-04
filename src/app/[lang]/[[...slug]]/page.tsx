import { Locale } from '@/config/i18n';
import data from './data.json';
import { ISection, sections } from '@/sections/index';
import Header from '@/layout/Header';

export interface IPageProps {
  params: {
    lang: Locale;
    slug?: string[] | undefined;
    searchParams: URLSearchParams | undefined;
  };
}

type TLayout = 'default' | 'onlyContent' | any;

interface IPageAttributes {
  title: string;
  slug: string;
  description: string;
  auth: boolean;
  createdAt: string;
  updatedAt: string;
  locale: string;
  publishedAt: string;
  layout: TLayout;
  sections: any[];
}

function getLayout(layout: TLayout) {
  switch (layout) {
    case 'default':
      return <Header />;
    case 'onlyContent':
      return null;
    default:
      return null;
  }
}

function getSections(sections: any[]) {
  return sections.map((section) => {
    const currentSection = sections.find((s) => s.key === section.key);
    const Section = currentSection?.component;
    return <Section key={section.key} value={section.value} sections={sections} />;
  });
}

export default async function Page({ params }: IPageProps) {
  const attributes: IPageAttributes = data?.data?.attributes;
  const onlyLayout = attributes.layout;
  const currentSections = attributes.sections;

  return (
    <div className="bg-bgSecondary">
      {getLayout(onlyLayout)}
      <main>{getSections(currentSections)}</main>
    </div>
  );
}
