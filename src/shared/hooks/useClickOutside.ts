import React, { useEffect } from 'react';

export interface IUseClickOutsideProps {
  listRef: React.MutableRefObject<any>;
  callback: () => void;
}

export default function useClickOutside({ listRef, callback }: IUseClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, listRef]);

  return null;
}
