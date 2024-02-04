import { titleStyle } from '@/shared/styles/primitives';
import * as React from 'react';

export interface ITitleProps {
  title: string;
}

export default function Title(props: ITitleProps) {
  return <h2 className={titleStyle({ size: 'lg' })}>title</h2>;
}
