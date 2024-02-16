import { IBaseSection } from '@/shared/types';
import * as React from 'react';

interface ITitleProps {
  title: string;
  href?: string;
}

export default function Title({ value }: IBaseSection<ITitleProps>) {
  return <h2 className="text-2xl font-bold text-primary">{value?.title}</h2>;
}
