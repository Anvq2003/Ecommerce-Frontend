import { ISection, sections } from '@/sections/index';
import { Dictionary } from '@/shared/helpers/getDictionary';
import * as React from 'react';

export interface IRenderSectionsProps {
  sectionsOfPage: any[];
  dict: Dictionary;
}

export default function RenderSections({ dict, sectionsOfPage }: IRenderSectionsProps) {
  return sectionsOfPage.map((section) => {
    const CurrentSection = sections?.find((s) => s.key === section?.__component)?.component;
    return CurrentSection ? (
      <CurrentSection key={section.id} value={section} dict={dict} sections={sectionsOfPage} />
    ) : null;
  });
}
