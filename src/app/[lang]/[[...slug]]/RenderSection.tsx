import { ISection, sections } from '@/sections/index';
import * as React from 'react';

export interface IRenderSectionsProps {
  sectionsOfPage: any[];
}

export default function RenderSections({ sectionsOfPage }: IRenderSectionsProps) {
  return sectionsOfPage.map((section) => {
    const CurrentSection = sections?.find((s) => s.key === section?.__component)?.component;
    return CurrentSection ? <CurrentSection key={section.id} value={section} sections={sectionsOfPage} /> : null;
  });
}
