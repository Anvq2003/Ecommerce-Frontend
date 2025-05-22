import React from 'react';

import { Chip, tv, useCheckbox, VisuallyHidden } from "@heroui/react";
import { CheckIcon } from '@heroicons/react/24/outline';

const checkbox = tv({
  slots: {
    base: 'border-none bg-[#EDEDF6] dark:bg-[#292E39] hover:bg-default-200',
    content: 'text-secondary',
  },
  variants: {
    isSelected: {
      true: {
        base: 'bg-yellow dark:bg-yellow hover:bg-yellow dark:opacity-80',
        content: 'text-primary dark:text-black pl-1',
      },
    },
    isFocusVisible: {
      true: {
        base: 'outline-none ring-1 ring-focus ring-offset-1 ring-offset-background',
      },
    },
  },
});

export const CustomCheckbox = (props: any) => {
  const { children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        radius="sm"
        size='lg'
        startContent={isSelected ? <CheckIcon className="ml-1 w-[1em] text-current dark:text-black" /> : null}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? 'Enabled' : 'Disabled'}
      </Chip>
    </label>
  );
};
