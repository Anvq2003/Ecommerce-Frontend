import React from 'react';

import { SECTION_KEY } from '@/shared/constants/section';

// import Grid from './Grid';
import Slider from './Slider';
import Title from './Title';
import ProductBox from './ProductBox';
import CategoryBox from './CategoryBox';
import FeatureBox from './Feature';
import ProfileBox from './ProfileBox';

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
    key: SECTION_KEY.PRODUCT_BOX,
    component: ProductBox,
  },
  {
    key: SECTION_KEY.CATEGORY_BOX,
    component: CategoryBox,
  },
  {
    key: SECTION_KEY.PRODUCT_DETAIL,
    component: CategoryBox,
  },
  {
    key: SECTION_KEY.FEATURE,
    component: FeatureBox,
  },
  {
    key: SECTION_KEY.PROFILE_BOX,
    component: ProfileBox,
  },
];
