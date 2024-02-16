import { Children, ReactNode } from 'react';

interface EachProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: T[];
  options?: {
    filter?: (item: T) => boolean;
  };
}

export function Each<T>({ render, of, options }: EachProps<T>): ReactNode[] {
  if (options?.filter) {
    return Children.toArray(of.filter(options.filter).map((item, index) => render(item, index)));
  }
  return Children.toArray(of.map((item, index) => render(item, index)));
}
