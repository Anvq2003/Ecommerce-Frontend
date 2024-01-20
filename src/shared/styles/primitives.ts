import { tv } from 'tailwind-variants';

export const title = tv({
  base: 'tracking-tight block font-bold text-primary',
  variants: {
    color: {
      default: 'textPrimary',
      violet: 'from-[#FF1CF7] to-[#b249f8]',
    },
    size: {
      sm: 'text-xl',
      md: 'lg:text-2xl lg:font-bold',
      lg: 'text-5xl lg:text-6xl',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
  compoundVariants: [
    {
      color: ['default', 'violet'],
      class: 'bg-gradient-to-r',
    },
  ],
});

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
