import React from 'react';

import { SECTION_KEY } from '@/shared/constants/section';

import Grid from './Grid';
import Slider from './Slider';
import Title from './Title';

export interface ISection {
  key: SECTION_KEY;
  component: React.FC<any>;
}

export const sections: ISection[] = [
  {
    key: SECTION_KEY.SLIDER,
    component: Slider,
  },
  {
    key: SECTION_KEY.TITLE,
    component: Title,
  },
  {
    key: SECTION_KEY.GRID,
    component: Grid,
  },
];
