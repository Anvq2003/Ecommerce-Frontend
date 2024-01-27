import { useEffect, useRef } from 'react';

export interface IUsePreviousProps<T> {
  value: T;
}

export default function usePrevious({ value }: IUsePreviousProps<any>) {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
